$(document).ready(function () {
    $('.dropdown-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('click').parents('.user').siblings('.menus').slideToggle();
    })


    $('.btn-burger').click(function () {
       $('.left-bar').fadeToggle();
    });

    $('.btn-close').click(function () {
        $('.left-bar').fadeOut();
    });

});