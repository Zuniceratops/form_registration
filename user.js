let email = document.getElementById('email');
let email_reg = /^[a-zA-Z0-9]+$/; 

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch && email == email_reg) {
      email.setCustomValidity('Проверте email');
    } else {
      email.setCustomValidity('');
    }
  });



let password = document.getElementById('password');
let password_reg = /^[a-zA-Z0-9]+$/; 

password.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length >= 6) {
        event.target.setCustomValidity('');
        return;
    }

    event.target.setCustomValidity('Пароль должен содержать более 6 символов');
})

