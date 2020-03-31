let email = document.getElementById('email');
let email_reg = /^[a-zA-Z0-9]+$/; 

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch && email == email_reg) {
      email.setCustomValidity('Проверте email');
    } else {
      email.setCustomValidity('');
    }
  });


