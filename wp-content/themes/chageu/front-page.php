<?php get_header(); ?>

<section class="home-hero">
    <div class="container">
        <div class="hero-card">
            <div class="hero-kicker">USDT转账查询 · USDT交易查询 · 哈希查询</div>
            <h1>USDT转账查询工具</h1>
            <p>输入USDT地址或交易哈希，查询公开链上转账记录、到账状态、转入转出信息和交易详情。</p>
            <div class="usdt-search-panel">
                <form class="usdt-search-form" action="<?php echo esc_url(home_url('/usdt-result/')); ?>" method="get">
                    <input type="text" name="address" placeholder="请输入USDT地址或交易哈希" autocomplete="off" required>
                    <button type="submit">立即查询</button>
                </form>
                <div class="usdt-hot-links">
                    <span>常用：</span>
                    <a href="<?php echo esc_url(home_url('/usdt/')); ?>">USDT转账查询</a>
                    <a href="<?php echo esc_url(home_url('/guide/')); ?>">使用教程</a>
                </div>
                <p class="usdt-search-note">本站仅查询公开链上信息，请勿输入私钥、助记词、钱包密码、交易所密码或验证码。</p>
            </div>
            <section class="usdt-rate-bar" data-rate-wrap>
                <div class="rate-card"><span>USDT参考汇率</span><strong data-rate="USDT">加载中</strong></div>
                <div class="rate-card"><span>TRX参考汇率</span><strong data-rate="TRX">加载中</strong></div>
                <div class="rate-card"><span>USDT/CNY</span><strong data-rate="USDT_CNY">加载中</strong></div>
                <div class="rate-card"><span>TRX/CNY</span><strong data-rate="TRX_CNY">加载中</strong></div>
            </section>
        </div>
        <div class="site-notice-red">
            <strong>重要提醒：</strong>本站只提供USDT转账公开链上信息查询，不提供交易、充值、提现、资金找回或投资建议。
        </div>
    </div>
</section>

<section class="home-service-section">
    <div class="container">
        <div class="service-grid">
            <a class="service-card" href="<?php echo esc_url(home_url('/energy-rental/')); ?>">
                <div class="service-icon">租</div><h3>能量供应商</h3><p>一笔也是批发价</p>
            </a>
            <a class="service-card" href="https://t.me/你的TG机器人" target="_blank" rel="nofollow sponsored noopener noreferrer">
                <div class="service-icon">TG</div><h3>TG机器人</h3><p>USDT与TRX交易提醒</p>
            </a>
            <a class="service-card" href="https://t.me/你的TG机器人" target="_blank" rel="nofollow sponsored noopener noreferrer">
                <div class="service-icon">TRX</div><h3>TRX自动闪兑</h3><p>USDT⇌TRX</p>
            </a>
            <a class="service-card" href="<?php echo esc_url(home_url('/energy-rental/')); ?>">
                <div class="service-icon">U</div><h3>免TRX转账USDT</h3><p>多元化的能量类型</p>
            </a>
        </div>
    </div>
</section>

<section class="container section">
    <div class="section-title">
        <span>查询功能</span>
        <h2>USDT转账记录查询入口</h2>
        <p>本站聚焦USDT转账查询，只做USDT公开链上转账记录相关功能。</p>
    </div>
    <div class="tool-grid two-tools">
        <a class="tool-card" href="<?php echo esc_url(home_url('/usdt/')); ?>">
            <i>USDT</i><h3>USDT转账查询</h3><p>查询USDT地址、转账记录、交易哈希和到账状态。</p>
        </a>
        <a class="tool-card" href="<?php echo esc_url(home_url('/guide/')); ?>">
            <i>GUIDE</i><h3>使用教程</h3><p>了解如何通过USDT地址或哈希值查询USDT转账记录。</p>
        </a>
    </div>
</section>

<section class="container section two-column">
    <div class="content-box">
        <span class="mini-title">使用说明</span>
        <h2>如何查询USDT转账记录？</h2>
        <p>复制USDT钱包地址或交易哈希，粘贴到查询框中，即可查看该笔USDT转账相关的公开链上信息。</p>
        <ul class="check-list">
            <li>查看USDT转账是否已经上链。</li>
            <li>核对转入地址、转出地址和金额。</li>
            <li>查看交易哈希、时间和状态。</li>
            <li>确认USDT是否已经到账。</li>
        </ul>
    </div>
    <aside class="side-card warning-card">
        <h3>安全提醒</h3>
        <p>本站只用于查询公开链上信息，不提供交易、充值、提现、钱包托管或资产找回服务。不要输入私钥、助记词或密码。</p>
        <a href="<?php echo esc_url(home_url('/disclaimer/')); ?>">查看免责声明</a>
    </aside>
</section>

<section class="container section">
    <div class="section-title">
        <span>常见问题</span>
        <h2>USDT转账查询常见问题</h2>
    </div>
    <div class="faq-grid">
        <div class="faq-item"><h3>USDT转账查询是什么？</h3><p>通过USDT地址或交易哈希查看公开链上转账记录的方法。</p></div>
        <div class="faq-item"><h3>哈希值查询有什么用？</h3><p>哈希值（TxID）可以定位一笔USDT转账，查看是否成功、金额和地址是否正确。</p></div>
        <div class="faq-item"><h3>本站能找回转错的U吗？</h3><p>不能。本站只提供公开链上数据查询。</p></div>
        <div class="faq-item"><h3>为什么查询不到？</h3><p>可能是输入格式不对、交易尚未上链，或接口尚未返回数据。</p></div>
    </div>
</section>

<?php get_footer(); ?>
