$('.Works_slider').slick({
        dots: true,
        margin:100,
    adaptiveHeight: true
    }
);

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTheTop').fadeIn();
        } else {
            $('#toTheTop').fadeOut();

        }
    });

    $('#toTheTop').click(function() {

        $('body,html').animate({scrollTop:0},800);
    });
});