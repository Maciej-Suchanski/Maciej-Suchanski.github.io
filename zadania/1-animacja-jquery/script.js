$('#animate').click(function () {
    $('#kwadrat').animate(
        { marginLeft: '100', width: '100', height: '100' }
        , 3000, function () {
            $('#kwadrat').css({
                backgroundColor: 'blue', transition: '5s'
            });
            setTimeout(function () {
                $("h2").css('opacity', '1');
            }, 5000);
        });
});