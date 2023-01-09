function getData() {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then((data) => {
            var div = document.getElementsByTagName('div');
            id = document.createElement("p");
            id.innerHTML = 'id: ' + data.id;
            div[0].append(id);
            userId = document.createElement("p");
            userId.innerHTML = 'userId: ' + data.userId;
            div[0].append(userId);
            title = document.createElement("p");
            title.innerHTML = 'title: ' + data.title;
            div[0].append(title);
            body = document.createElement("p");
            body.innerHTML = 'body: ' + data.body;
            div[0].append(body);
        });
}
let form = document.getElementById('btn');
form.addEventListener('click', getData);