<?php
//Load Styling
function load_stylesheets(){

    wp_register_style('Style', get_template_directory_uri() . '/main.css', array(), 1.5, 'all');
    wp_enqueue_style('Style');


    wp_register_style('swiper', get_template_directory_uri() . '/swiper.css', array(), 1.1, 'all');
    wp_enqueue_style('swiper');

    wp_register_style('vivify', get_template_directory_uri() . '/vivify.min.css', array(), 1.1, 'all');
    wp_enqueue_style('vivify');
}



add_action('wp_enqueue_scripts', 'load_stylesheets');
//Load JS
function addjs()
{
wp_register_script('swiperjs', get_template_directory_uri() . '/swiper.js', '',  array(), 1, 1, 1);
wp_enqueue_script('swiperjs');
}

add_action('wp_enqueue_scripts', 'addjs');

//Theme Options

add_theme_support('menus');

add_theme_support('post-thumbnails');

//Menus 
register_nav_menus( 
    array(
        'top-menu' => 'Top Menu Location',
        'footer-menu' => 'Footer Menu Location',
    )
);

function wpsites_query( $query ) {
    if ( $query->is_archive() && $query->is_main_query() && !is_admin() ) {
            $query->set( 'posts_per_page', 50 );
        }
    }
add_action( 'pre_get_posts', 'wpsites_query' );

remove_filter( 'the_content', 'wpautop' );