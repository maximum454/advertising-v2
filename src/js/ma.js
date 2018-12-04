//= partials/jquery.min.js
//= partials/jquery.mask.min.js
$(function () {
    $(".js-anhor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });

    $('.js-nav-btn').on("click", function () {
        $(this).toggleClass('active');
        $('.nav').fadeToggle();
    });

    $('#phone').mask('+0 000 000-00-00');

    $('.js-feedback').on("click", function () {
        $('.feedback').fadeIn();
    });
    $('.js-close').on("click", function () {
        $('.feedback').fadeOut();
    });
});