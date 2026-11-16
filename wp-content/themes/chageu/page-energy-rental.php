<?php
/**
 * Template Name: 能量闪租
 */
get_header();

// 以下两个值建议在 wp-config.php 中定义，不要硬编码在这里
$rental_address = defined('CHAGEU_RENTAL_ADDRESS') ? CHAGEU_RENTAL_ADDRESS : '你的收款地址';
$tg_contact     = defined('CHAGEU_TG_CONTACT') ? CHAGEU_TG_CONTACT : 'https://t.me/你的客服';
?>

<div class="container">
    <div class="rental-hero">
        <h1>TRX 能量闪租</h1>
        <p>一笔也是批发价 · 自动到账 · 1 小时有效</p>
    </div>

    <div class="rental-address-box">
        <label>闪租能量收款地址（仅收 TRX，勿转其他资产）</label>
        <div class="address-row">
            <code id="rentalAddress"><?php echo esc_html($rental_address); ?></code>
            <button class="copy-btn" type="button" onclick="copyRentalAddress()">复制地址</button>
        </div>
    </div>

    <div class="rental-rules">
        <h3>套餐与规则</h3>
        <ul>
            <li><strong>2 TRX = 65,000 能量</strong>（接收方已持有 USDT）</li>
            <li><strong>4 TRX = 131,000 能量</strong>（接收方首次持有 USDT，需要双倍能量）</li>
            <li>单次最多购买 <strong>2 笔</strong>，转账金额不可大于 <strong>50 TRX</strong></li>
            <li>能量委托有效期 <strong>1 小时</strong>，过期自动回收</li>
            <li>转账后请等待约 3–10 秒，能量自动到账，无需额外操作</li>
        </ul>
        <div class="rental-warning">
            转错金额、超过上限或重复转账将进入人工处理队列。如遇异常，请联系 TG 客服：<a href="<?php echo esc_url($tg_contact); ?>" target="_blank" rel="nofollow noopener"><?php echo esc_html($tg_contact); ?></a>
        </div>
    </div>
</div>

<script>
function copyRentalAddress() {
    var el = document.getElementById('rentalAddress');
    navigator.clipboard.writeText(el.textContent.trim()).then(function () {
        alert('收款地址已复制');
    }).catch(function () {
        var range = document.createRange();
        range.selectNode(el);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        alert('收款地址已复制');
    });
}
</script>

<?php get_footer(); ?>
