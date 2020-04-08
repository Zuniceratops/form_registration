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
let checkmark = document.getElementById('checkmark');


signin.addEventListener("click", function (event) {
  signin.classList.add('is-active');
  signup.classList.remove('is-active');

  title_sign_up.classList.add('displaynone');
  title_sign_in.classList.remove('displaynone');
  email.classList.add('displaynone');
  push_reg.classList.add('displaynone');
  btnSingIn.classList.remove('displaynone');

});

signup.addEventListener("click", function (event) {
  signup.classList.add('is-active');
  signin.classList.remove('is-active');

  title_sign_up.classList.remove('displaynone');
  title_sign_in.classList.add('displaynone');
  email.classList.remove('displaynone');
  push_reg.classList.add('displaynone');
  btnSingIn.classList.remove('displaynone');
});




button.addEventListener("click", function (event) {
  event.target.style.color = '#748194';
  push_reg.classList.add('displaynone');
  button.classList.add('button_title');
  loading.classList.remove('displaynone');

  username.setAttribute("disabled", "true");
  email.setAttribute("disabled", "true");
  password.setAttribute("disabled", "true");

  checkmark.classList.add('displaynone');
  btnSingIn.classList.add('displaynone');
  
  setTimeout( function (){
    loading.classList.add('displaynone');
    checkmark.classList.remove('displaynone');
    
    username.value = '';
    email.value = '';
    password.value = '';

    username.disabled = false;
    email.disabled = false;
    password.disabled = false;

    push_reg.classList.add('displaynone');
    button.classList.add('button_title');
  }, 3000);

 
  setTimeout( function (){
    checkmark.classList.add('displaynone');
    button.value = '';
    push_reg.classList.remove('displaynone');
    push_reg.classList.add('button_title_reg');
    button.classList.remove('button_title');
  }, 5000);
}); 

