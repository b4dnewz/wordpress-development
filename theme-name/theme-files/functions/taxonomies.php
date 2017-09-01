<?php

// Register Custom Taxonomy
function custom_product_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Product Tags', 'Taxonomy General Name', 'theme-name' ),
		'singular_name'              => _x( 'Product Tag', 'Taxonomy Singular Name', 'theme-name' ),
		'menu_name'                  => __( 'Product Tag', 'theme-name' ),
		'all_items'                  => __( 'All Tags', 'theme-name' ),
		'parent_item'                => __( 'Parent Tag', 'theme-name' ),
		'parent_item_colon'          => __( 'Parent Tag:', 'theme-name' ),
		'new_item_name'              => __( 'New Tag Name', 'theme-name' ),
		'add_new_item'               => __( 'Add New Tag', 'theme-name' ),
		'edit_item'                  => __( 'Edit Tag', 'theme-name' ),
		'update_item'                => __( 'Update Tag', 'theme-name' ),
		'view_item'                  => __( 'View Tag', 'theme-name' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'theme-name' ),
		'add_or_remove_items'        => __( 'Add or remove items', 'theme-name' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'theme-name' ),
		'popular_items'              => __( 'Popular Tags', 'theme-name' ),
		'search_items'               => __( 'Search Tags', 'theme-name' ),
		'not_found'                  => __( 'Not Found', 'theme-name' ),
		'no_terms'                   => __( 'No items', 'theme-name' ),
		'items_list'                 => __( 'Tags list', 'theme-name' ),
		'items_list_navigation'      => __( 'Tags list navigation', 'theme-name' ),
	);

	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);

	register_taxonomy( 'product_tag', array( 'product' ), $args );

}

add_action( 'init', 'custom_product_taxonomy', 0 );
