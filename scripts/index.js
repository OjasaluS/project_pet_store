$(document).ready(function () {
    $('.switch-1').on('click', function() {
        if ($('.banner-1').is(':visible')) {
            return;
        }
        $('.switch').css('background-color', '#bbb');
        $(this).css('background-color', '#777777');
        $('.banner').hide();
        $('.banner-1').fadeIn();
    });

    $('.switch-2').on('click', function() {
        if ($('.banner-2').is(':visible')) {
            return;
        }
        $('.switch').css('background-color', '#bbb');
        $(this).css('background-color', '#777777');
        $('.banner').hide();
        $('.banner-2').fadeIn();
    });

    $('.switch-3').on('click', function() {
        if ($('.banner-3').is(':visible')) {
            return;
        }
        $('.switch').css('background-color', '#bbb');
        $(this).css('background-color', '#777777');
        $('.banner').hide();
        $('.banner-3').fadeIn();
    });
});