<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<link href="//www.google-analytics.com" rel="dns-prefetch">
		<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?>" href="<?php bloginfo('rss2_url'); ?>" />
		<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" media="screen">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script type="text/javascript" src="<?php echo wp_make_link_relative( get_template_directory_uri() . '/assets/bundle.js' ); ?>"></script>
		<!-- analytics -->
		<script>
			(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
			(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
			l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
			ga('send', 'pageview');
		</script>
		<!-- /analytics -->
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

		<!-- header -->
		<header class="header">

			<div class="main-width">

				<!-- logo -->
				<div class="logo unselectable">
					<div class="site-head">
							<a href="<?php echo home_url(); ?>">
								<div class="site-image">
									<img class="logo-img" src="<?php echo get_template_directory_uri(); ?>/assets/dist/img/logo.png" alt="<?php bloginfo('name'); ?> Logo" />
								</div>
								<div class="site-info">
									<h1 class="site-title"><?php bloginfo('name'); ?></h1>
									<h2 class="site-description"><?php bloginfo('description'); ?></h2>
								</div>
							</a>
					</div>
				</div>
				<!-- /logo -->

				<!-- nav -->
				<nav class="nav">
					<?php theme_navigation(); ?>
				</nav>
				<!-- /nav -->

			</div>

		</header>
		<!-- /header -->
