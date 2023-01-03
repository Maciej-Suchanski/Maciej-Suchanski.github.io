$(document).ready(function () {
    $('.hamburger').click(function () {
        if ($('ul').hasClass('closed')) {
            $('ul').removeClass('closed');
            $('ul').find('closed').slideLeft();
        } else {
            $('ul').addClass('closed');
            $('ul').find('closed').slideRight();
        }
    });

    $('ul li a').click(function (e) {
        e.preventDefault();
        $('body').fadeOut(2000);
        let link = $(this).attr('href');
        setTimeout(function () { window.location.href = link; }, 2000);
    });

});