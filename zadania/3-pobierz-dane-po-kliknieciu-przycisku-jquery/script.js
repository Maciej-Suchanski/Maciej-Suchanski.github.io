$('button').click(function () {
    $( "h3" ).remove();
    $( "p" ).remove();
    $.get('https://akademia108.pl/api/ajax/get-post.php', function (data) {
        $("div").append("<h3>Metoda get</h3>");
        $("div").append("<p>id: " + data.id + "</p>");
        $("div").append("<p>userId: " + data.userId + "</p>");
        $("div").append("<p>title: " + data.title + "</p>");
        $("div").append("<p>body: " + data.body + "</p>");
    });

    $.getJSON('https://akademia108.pl/api/ajax/get-post.php', function (data2) {
        $("div").append("<h3>Metoda getJSON</h3>");
        $("div").append("<p>id: " + data2.id + "</p>");
        $("div").append("<p>userId: " + data2.userId + "</p>");
        $("div").append("<p>title: " + data2.title + "</p>");
        $("div").append("<p>body: " + data2.body + "</p>");
    });
});
