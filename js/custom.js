/*global $, alert , console*/
$(function () {
    
    'use strict';
     //call bxslider
    $('.bxslider').bxSlider();
    
    // Adjust header height
    
    var myheader = $('.header');
    
    myheader.height($(window).height());
    
    $(window).resize(function () {
        
        myheader.height($(window).height());
        
    });
    
    //link add active class
    
    $('.links li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');  
        
    });
    $('.bxslider').each(function () {
        $(this).css('paddingtop', ($(window).height() - $('.bxslider li').height()) / 2); 
    });
    
    
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000); 
    });
    (function autoslider() {
        $('.slider .active').each(function () {
         
        if (!$(this).is(':last-child')) {
            $(this).delay(3000).fadeOut(1000, function () {             $(this).removeClass('active').next().addClass('active').fadeIn();
                        autoslider();
                });
        } else{
            $(this).delay(3000).fadeOut(1000, function () {
                $(this).removeClass('active')
                $('.slider div').eq(0).addClass('active').fadeIn();
                autoslider();
            });
        }
            
    });
}());
    
});