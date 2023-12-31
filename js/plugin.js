/*global $, alert, console, prompt*/

$(document).ready(function () {

    'use strict';

    AOS.init();

    $(window).on('scroll', function(e){
        let offsetTop = $(this).scrollTop();
        if(offsetTop > 1) {
            $('nav').addClass('bg-light shadow-sm');
            $('nav').removeClass('text-white').addClass('secondary_color');
            $('nav .menu_icon img').attr('src','./img/icons/menu-color.svg')
            $('nav .logo').attr('src','./img/logo.svg')
        }
        else {
            $('nav').removeClass('bg-light shadow-sm');
            $('nav').removeClass('secondary_color').addClass('text-white');
            $('nav .menu_icon img').attr('src','./img/icons/menu-white.svg')
            $('nav .logo').attr('src','./img/logo-white.svg')
        }
    })

    $(".owl-carousel-1").owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        rtl: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $(".owl-carousel-2").owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        rtl: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('#up_icon').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    $('#down_icon').on('click', function(){
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000)
    })
    
    $('.open_navbar').on('click', function(){
        $('.nav_links').addClass('nav_open');
    })
    $('.close_navbar').on('click', function(){
        $('.nav_links').removeClass('nav_open');
    })


});
