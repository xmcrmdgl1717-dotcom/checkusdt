<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="site-header">
    <div class="header-topline"></div>
    <div class="container header-inner">
        <a class="site-logo" href="<?php echo esc_url(home_url('/')); ?>">
            <span>查个U</span>
            <small>USDT交易记录查询工具</small>
        </a>
        <button class="menu-toggle" type="button" aria-label="打开菜单">
            <span></span><span></span><span></span>
        </button>
        <nav class="main-nav">
            <ul class="nav-menu">
                <li><a href="<?php echo esc_url(home_url('/')); ?>">首页</a></li>
                <li><a href="<?php echo esc_url(home_url('/usdt/')); ?>">USDT转账查询</a></li>
                <li><a href="<?php echo esc_url(home_url('/energy-rental/')); ?>">能量闪租</a></li>
                <li><a href="<?php echo esc_url(home_url('/guide/')); ?>">使用教程</a></li>
                <li><a href="<?php echo esc_url(home_url('/about/')); ?>">关于我们</a></li>
                <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">联系我们</a></li>
            </ul>
        </nav>
        <a class="header-action" href="<?php echo esc_url(home_url('/usdt/')); ?>">立即查询</a>
    </div>
</header>
<main class="site-main">
