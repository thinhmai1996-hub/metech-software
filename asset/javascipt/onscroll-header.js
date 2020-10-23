$(window).scroll(function(){
    let x = screen.width;
    if (x <= 375 ) {
        if ($(window).scrollTop() >= 120) {
            $('#myHeader').addClass('fixed-header');
        }
        else {
            $('#myHeader').removeClass('fixed-header');
        }
    }else if (x < 768) {
        if ($(window).scrollTop() >= 320) {
            $('#myHeader').addClass('fixed-header');
        }
        else {
            $('#myHeader').removeClass('fixed-header');
        }
    }else if (x < 991) {
        if ($(window).scrollTop() >= 440) {
            $('#myHeader').addClass('fixed-header');
        }
        else {
            $('#myHeader').removeClass('fixed-header');
        }
    }else if (x < 1200) {
        if ($(window).scrollTop() >= 500) {
            $('#myHeader').addClass('fixed-header');
        }
        else {
            $('#myHeader').removeClass('fixed-header');
        }
    }else{
        if ($(window).scrollTop() >= 600) {
            $('#myHeader').addClass('fixed-header');
        }
        else {
            $('#myHeader').removeClass('fixed-header');
        }
    }
});

function eventDropdown(){
    $('#myHeader').addClass('fixed-header');
}