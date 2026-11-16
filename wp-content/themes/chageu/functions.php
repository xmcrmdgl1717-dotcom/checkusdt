<?php
/**
 * 查个U 主题函数
 */

// 主题基础支持
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus([
        'primary' => '主导航',
    ]);
});

// 载入样式和脚本
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('chageu-style', get_stylesheet_uri(), [], '1.0.0');
    wp_enqueue_script('chageu-app', get_template_directory_uri() . '/assets/app.js', [], '1.0.0', true);
    wp_localize_script('chageu-app', 'CHAGEU_DATA', [
        'homeUrl'   => home_url('/'),
        'restUrl'   => rest_url('chageu/v1/search'),
        'priceUrl'  => rest_url('chageu/v1/price'),
        'resultUrl' => home_url('/usdt-result/'),
    ]);
});

/**
 * 注册 REST API 端点
 * /wp-json/chageu/v1/search
 * /wp-json/chageu/v1/price
 */
add_action('rest_api_init', function () {

    // 查询：地址或 TxID → 返回链上公开数据
    register_rest_route('chageu/v1', '/search', [
        'methods'             => 'GET',
        'callback'            => 'chageu_handle_search',
        'permission_callback' => '__return_true',
        'args'                => [
            'q' => [
                'required'          => true,
                'sanitize_callback' => 'sanitize_text_field',
            ],
        ],
    ]);

    // 参考汇率（代理 CoinGecko / Binance 公开行情）
    register_rest_route('chageu/v1', '/price', [
        'methods'             => 'GET',
        'callback'            => 'chageu_handle_price',
        'permission_callback' => '__return_true',
    ]);
});

function chageu_handle_search(WP_REST_Request $request) {
    $q = trim($request->get_param('q'));
    if ($q === '') {
        return new WP_Error('empty_query', '请输入地址或交易哈希', ['status' => 400]);
    }

    // 判断是 TxID（64位hex）还是地址（T开头34位base58）
    if (preg_match('/^[0-9a-fA-F]{64}$/', $q)) {
        $url = 'https://api.trongrid.io/v1/transactions/' . $q;
    } elseif (preg_match('/^T[1-9A-HJ-NP-Za-km-z]{33}$/', $q)) {
        $url = 'https://api.trongrid.io/v1/accounts/' . $q . '/transactions?limit=20&only_confirmed=true';
    } else {
        return new WP_Error('invalid_query', '格式不是有效的 TRON 地址或 TxID', ['status' => 400]);
    }

    $cache_key = 'chageu_search_' . md5($q);
    $cached = get_transient($cache_key);
    if ($cached !== false) {
        return rest_ensure_response($cached);
    }

    $response = wp_remote_get($url, [
        'timeout' => 15,
        'headers' => [
            'TRON-PRO-API-KEY' => defined('TRONGRID_API_KEY') ? TRONGRID_API_KEY : '',
            'Accept'           => 'application/json',
        ],
    ]);

    if (is_wp_error($response)) {
        return new WP_Error('trongrid_error', '链上查询暂时不可用', ['status' => 502]);
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);
    set_transient($cache_key, $body, 30);

    return rest_ensure_response($body);
}

function chageu_handle_price() {
    $cached = get_transient('chageu_price_cache');
    if ($cached !== false) {
        return rest_ensure_response($cached);
    }

    // 使用 Binance 公开行情，不需要 API Key
    $usdt = wp_remote_get('https://api.binance.com/api/v3/ticker/price?symbol=USDTUSDC');
    $trx  = wp_remote_get('https://api.binance.com/api/v3/ticker/price?symbol=TRXUSDT');
    $usdt_rate = 1.0;
    $trx_rate  = 0.0;

    if (!is_wp_error($trx)) {
        $trx_body = json_decode(wp_remote_retrieve_body($trx), true);
        $trx_rate = isset($trx_body['price']) ? (float) $trx_body['price'] : 0.0;
    }

    $payload = [
        'USDT'     => $usdt_rate,
        'TRX'      => $trx_rate,
        'USDT_CNY' => $usdt_rate * 7.2,
        'TRX_CNY'  => $trx_rate * 7.2,
        'updated'  => time(),
    ];

    set_transient('chageu_price_cache', $payload, 60);
    return rest_ensure_response($payload);
}

// 在 wp-config.php 中定义 TRONGRID_API_KEY，不要写在这里
