// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let formValid = true;

    if (name === '') {
        document.getElementById('name-error').innerText = 'Please enter your name.';
        formValid = false;
    } else {
        document.getElementById('name-error').innerText = '';
    }

    if (!validateEmail(email)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email address.';
        formValid = false;
    } else {
        document.getElementById('email-error').innerText = '';
    }

    if (message === '') {
        document.getElementById('message-error').innerText = 'Please enter a message.';
        formValid = false;
    } else {
        document.getElementById('message-error').innerText = '';
    }

    if (formValid) {
        // Submit form data using AJAX or fetch API
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}