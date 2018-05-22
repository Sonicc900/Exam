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

    function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }