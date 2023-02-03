/* const data = { username: 'example' };
 */
function secondForm() {
    let name = document.forms["second-form"]["name"].value;
    let email = document.forms["second-form"]["email"].value;
    let comment = document.forms["second-form"]["comment"].value;
    if (name == "") {
      console.log("Name empty");
    }
    if (email == "") {
        console.log("Email empty");
    }
    if (comment == "") {
        console.log("Comment empty");
    }
  }

fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    }); 

