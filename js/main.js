$(document).ready(function () {
    $('.dropdown-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('click').parents('.user').siblings('.menus').slideToggle();
    });


    $('.btn-burger').click(function () {
        $('.left-bar').fadeToggle();
    });

    $('.btn-close').click(function () {
        $('.left-bar').fadeOut();
    });

    autosize(document.querySelectorAll('textarea'));

    $('.btn-dropDown').click(function () {
        $('.dropDown-menu').fadeOut();
        $(this).toggleClass('click').siblings('.dropDown-menu').fadeToggle();
    });

    $('.links-toggle').on('click', function (e) {
       e.preventDefault();
        var
            $this = $(this).parents('.history-category');
            // content = $(this).parents('.history-category').find('.block_hidden');


        if($this.hasClass('open')){
            $this.removeClass('open');
            $(this).html('показать товары');

            // content.fadeOut();

        } else {
            $this.addClass('open');
            $(this).html('свернуть раздел');

            // content.fadeIn();
        }
    });


    $('.dropDown-menu input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parents('.radio-container').addClass("check");
        } else {
            $(this).parents('.radio-container').removeClass("check");
        }
    });

    $('.load-more').on('click', function (e) {
        e.preventDefault();
        $('.table-body .line:hidden').slice(0, 5).css('display', 'flex');

        var onBlock = $('.equipment-product:hidden').length;
        if(onBlock <= 0) {
            $('.load-more').hide();
        }
    });


});

$('body').on('click', '.eye', function(e){
    e.preventDefault();
    if ($('#password').attr('type') === 'password'){
        // $(this).addClass('view');
        $('#password').attr('type', 'text');
    } else {
        // $(this).removeClass('view');
        $('#password').attr('type', 'password');
    }
    return false;
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".dropDown-menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
    }
});