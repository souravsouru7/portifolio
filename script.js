var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var numberError = document.getElementById('number-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = 'Valid';
    nameError.style.color = "green";
    return true;
}

function validateNumber() {
    var number = document.getElementById('contact-number').value;
    if (number.length == 0) {
        numberError.innerHTML = "Number is required";
        return false;
    }
    if (number.length != 10) {
        numberError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    if (!number.match(/^[0-9]{10}$/)) {
        numberError.innerHTML = "Only digits allowed";
        return false;
    }
    numberError.innerHTML = "Valid";
    numberError.style.color = "green";
    return true;
}

function validateEmail() {
    var email = document.getElementById('email-verification').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z_.-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email format";
        return false;
    }
    emailError.innerHTML = "Valid";
    emailError.style.color = "green";
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 10;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    } else {
        messageError.innerHTML = "Valid";
        messageError.style.color = "green";
        return true;
    }
}


