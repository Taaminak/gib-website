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
    


});
