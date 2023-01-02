$('#count-sum').click(function () {
    let sum = 0;
    let i = 1;
    $('div').each(function () {
        sum += Number($('#person' + [i]).find('.salary').text());
        i += 1;
    });
    $('#sum').html(sum);
});