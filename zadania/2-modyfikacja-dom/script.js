$('#btn1').click(function () {
    $("p:last").prependTo('div');
});

$('#btn2').click(function () {
    $("p:first").appendTo('div');
});
