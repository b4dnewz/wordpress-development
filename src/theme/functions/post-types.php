<?php

// Register Custom Post Type
function theme_custom_post_types() {

  // the post types to add
  $post_types = array(

    'product' => array(
      'label'                 => __( 'Product', 'theme-name' ),
      'description'           => __( 'Product information pages.', 'theme-name' ),
      'labels'                => array(
        'name'                  => _x( 'Products', 'Post Type General Name', 'theme-name' ),
        'singular_name'         => _x( 'Product', 'Post Type Singular Name', 'theme-name' ),
        'menu_name'             => __( 'Products', 'theme-name' ),
        'name_admin_bar'        => __( 'Product', 'theme-name' ),
        'archives'              => __( 'Item Archives', 'theme-name' ),
        'parent_item_colon'     => __( 'Parent Product:', 'theme-name' ),
        'all_items'             => __( 'All Products', 'theme-name' ),
        'add_new_item'          => __( 'Add New Product', 'theme-name' ),
        'add_new'               => __( 'New Product', 'theme-name' ),
        'new_item'              => __( 'New Item', 'theme-name' ),
        'edit_item'             => __( 'Edit Product', 'theme-name' ),
        'update_item'           => __( 'Update Product', 'theme-name' ),
        'view_item'             => __( 'View Product', 'theme-name' ),
        'search_items'          => __( 'Search products', 'theme-name' ),
        'not_found'             => __( 'No products found', 'theme-name' ),
        'not_found_in_trash'    => __( 'No products found in Trash', 'theme-name' ),
        'featured_image'        => __( 'Featured Image', 'theme-name' ),
        'set_featured_image'    => __( 'Set featured image', 'theme-name' ),
        'remove_featured_image' => __( 'Remove featured image', 'theme-name' ),
        'use_featured_image'    => __( 'Use as featured image', 'theme-name' ),
        'insert_into_item'      => __( 'Insert into item', 'theme-name' ),
        'uploaded_to_this_item' => __( 'Uploaded to this item', 'theme-name' ),
        'items_list'            => __( 'Items list', 'theme-name' ),
        'items_list_navigation' => __( 'Items list navigation', 'theme-name' ),
        'filter_items_list'     => __( 'Filter items list', 'theme-name' ),
      ),
      'supports'              => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'custom-fields', ),
      'taxonomies'            => array( 'category', 'product_tag' ),
      'hierarchical'          => false,
      'public'                => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'menu_position'         => 5,
      'show_in_admin_bar'     => true,
      'show_in_nav_menus'     => true,
      'can_export'            => true,
      'has_archive'           => true,
      'exclude_from_search'   => false,
      'publicly_queryable'    => true,
      'capability_type'       => 'page',
    )

  );

  // register each post type
  foreach ($post_types as $type_name => $type_args) {
    register_post_type( $type_name, $type_args );
  }

}

add_action( 'init', 'theme_custom_post_types', 0 ); // Add theme custom post types (one as example)
