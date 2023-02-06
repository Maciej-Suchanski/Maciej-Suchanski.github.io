const createAppointment = (appointment) => {

    const appointmentMessage = document.querySelector('.form-1-msg');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            appointmentMessage.classList.add('send');
            appointmentMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`
        });
}

document.getElementById('form-1').addEventListener('submit', function (e) {
    e.preventDefault();

    const appointmentMessage = document.querySelector('.form-1');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('select').value,
        phone: document.getElementById('tel').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('notes').value
    }

    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if (allFields) {
        createAppointment(appointment);
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = `Wypełnij wymagane pola`;
    }
})