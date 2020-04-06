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
let push_reg = document.getElementById('push_reg');
let loading = document.getElementById('loading');

signin.addEventListener("click",function (event) {
  event.target.style.color = '#e9a1dd';
  signin.classList.add('non-active');
  title_sign_up.classList.add('displaynone');
  title_sign_in.classList.remove('displaynone');
  email.classList.add('displaynone');


  push_reg.classList.add('displaynone');
  btnSingIn.classList.remove('displaynone');

});

signup.addEventListener("click", function (event) {
  event.target.style.color = '#748194';
  signup.classList.add('is-active');
});

button.addEventListener("click", function (event) {
  event.target.style.color = '#748194';
  push_reg.classList.add('displaynone');
  button.classList.add('button_title');

  loading.classList.remove('displaynone');
  username.setAttribute("disabled", "true");
  email.setAttribute("disabled", "true");
  password.setAttribute("disabled", "true");
  
  setTimeout( function (){
    loading.classList.add('displaynone');
    username.setAttribute("disabled", "false");
    email.setAttribute("disabled", "false");
    password.setAttribute("disabled", "false");
    button.classList.remove('button_title');
  }, 3000);
 
});



