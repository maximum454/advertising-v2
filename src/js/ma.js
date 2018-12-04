//= partials/jquery.min.js
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
});