let username = document.getElementById('name');

username.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length >= 2) {
      event.target.setCustomValidity('');
      console.log('!')
      return;
    }
    event.target.setCustomValidity('Имя должно содержать нижний регистр и быть не менее 2 символов');
    console.log('2')
})


let email = document.getElementById('email');

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('Проверте email');
      console.log('2')
    } else {
      email.setCustomValidity('');
      console.log('!')
    }
});

  

let password = document.getElementById('password');

password.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length >= 6) {
        event.target.setCustomValidity('');
        console.log('!')
        return;
    }

    event.target.setCustomValidity('Пароль должен быть более 6 символов и не должен содержать символы');
    console.log('2')
})



let signin = document.getElementById('sign-in');
let signup = document.getElementById('sign-up');

let title_sign_up = document.getElementById('title_sign_up');
let title_sign_in = document.getElementById('title_sign_in');
let button = document.getElementById('button');
let btnSingIn = document.getElementById('btn-sing-in');

signin.addEventListener("click",function (event) {
  event.target.style.color = '#e9a1dd';
  signin.classList.add('non-active');
  title_sign_up.classList.add('displaynone');
  title_sign_in.classList.remove('displaynone');
  email.classList.add('displaynone');
  button.classList.add('button_title');
  btnSingIn.classList.remove('displaynone')
  // username.setAttribute('disabled');
  // document.getElementById("myText").readOnly = true;

});
signup.addEventListener("click", function (event) {
  event.target.style.color = '#748194';
  signup.classList.add('is-active');
});

// signin.addEventListener("click",function (event) {
//   event.target.style.coslor = '748194';
//   signin.classList.add('is-active');
// });
// signup.addEventListener("click", function (event) {
//   event.target.style.color = '#e9a1dd';
//   signup.classList.add('non-active');
// });


// title_sign_up.addEventListener('')

