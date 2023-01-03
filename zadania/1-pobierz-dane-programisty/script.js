$(document).ready(function () {
    $('button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $("div").append("<p>"+data.imie+"</p>");
            $("div").append("<p>"+data.nazwisko+"</p>");
            $("div").append("<p>"+data.zawod+"</p>");
            $("div").append("<p>"+data.firma+"</p>");
        });
    })
});