let userName = document.querySelector('#user-name');
let emailId = document.querySelector('#email-id');
let mobileNo = document.querySelector('#mobile-no');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');

function isEmailValid(str) {
    if ((/^\S+@\S+\.\S+$/).test(str))
        return 1;
    return 0;
}

function isNumberValid(str) {
    if ((/^\d{10}$/).test(str))
        return 1;
    return 0;
}

function isPasswordValid(str) {
    if (str.length > 3)
        return 1;
    return 0;
}

function validateInput() {

    let userNameValue = userName.value.trim();
    let emailIdValue = emailId.value.trim();
    let mobileNoValue = mobileNo.value.trim();
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();


    if (userNameValue.length <= 3)
        setError(userName, 'Username should be greater than 3 characters');
    else
        setSuccess(userName);

    if (!isEmailValid(emailIdValue)) {
        setError(emailId, 'Invalid Email-Id');
    } else
        setSuccess(emailId);

    if (!isNumberValid(mobileNoValue))
        setError(mobileNo, 'Invalid Number');
    else
        setSuccess(mobileNo);

    if (!isPasswordValid(passwordValue))
        setError(password, 'Invalid Password');
    else
        setSuccess(password);

    if (passwordValue.length == 0 || passwordValue != confirmPasswordValue)
        setError(confirmPassword, "Passwords don't match");
    else
        setSuccess(confirmPassword);
}

function setError(element, message) {
    let fieldControl = element.parentElement;
    let span = fieldControl.querySelector('span');

    span.innerHTML = message; //Set the message
    fieldControl.className = 'field-control error'; //Set the class
}

function setSuccess(element) {
    let fieldControl = element.parentElement;
    let span = fieldControl.querySelector('span');
    fieldControl.className = 'field-control success';

}