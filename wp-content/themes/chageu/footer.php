</main>
<footer class="site-footer">
    <div class="container footer-grid">
        <div>
            <h3>查个U</h3>
            <p>提供USDT转账查询、能量闪租等公开链上信息服务。</p>
            <p class="footer-warning">本站不提供数字货币交易、钱包托管、充值提现、资金找回或投资建议。</p>
        </div>
        <div>
            <h4>核心功能</h4>
            <a href="<?php echo esc_url(home_url('/usdt/')); ?>">USDT转账查询</a>
            <a href="<?php echo esc_url(home_url('/energy-rental/')); ?>">能量闪租</a>
            <a href="<?php echo esc_url(home_url('/guide/')); ?>">使用教程</a>
        </div>
        <div>
            <h4>网站信息</h4>
            <a href="<?php echo esc_url(home_url('/about/')); ?>">关于我们</a>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>">联系我们</a>
        </div>
        <div>
            <h4>说明页面</h4>
            <a href="<?php echo esc_url(home_url('/privacy/')); ?>">隐私政策</a>
            <a href="<?php echo esc_url(home_url('/terms/')); ?>">服务条款</a>
            <a href="<?php echo esc_url(home_url('/disclaimer/')); ?>">免责声明</a>
        </div>
    </div>
    <div class="container footer-bottom">
        <p>© <?php echo date('Y'); ?> 查个U. 所有查询结果仅供参考。</p>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
