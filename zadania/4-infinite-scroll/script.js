function scrollToEndOfPage() {
    let x = document.documentElement.scrollHeight;
    let y = document.documentElement.scrollTop;
    let z = document.documentElement.clientHeight;

    if (y + z >= x) {
        getData();
    };
}

function getData() {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(response => response.json())
        .then((data) => {
            for (let i = 0; i < 5; i++) {
                document.body.innerHTML += '<p>User ID: ' + data[i].id + '</p>';
                document.body.innerHTML += '<p>User Name: ' + data[i].name + '</p>';
                document.body.innerHTML += '<p>User URL: ' + data[i].website + '</p>';
                document.body.innerHTML += '--------';
              }
        });
}

window.addEventListener('scroll', scrollToEndOfPage);