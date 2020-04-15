//validation form
let username = document.getElementById('name');

username.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length >= 2 && value.length <= 12) {
      event.target.setCustomValidity('');
      let regEx = /[a-z]{0,12}$/i;
      event.target.style.border = "2px solid green";
      return regEx.test(String(value).toLowerCase());;
    }
      event.target.style.border = "2px solid red";
      event.target.setCustomValidity('Имя должно содержать нижний регистр и быть не менее 2 символов');
})


let email = document.getElementById('email');

email.addEventListener("input", function (event) {
  const value = event.target.value;

    if (email.validity.typeMismatch) {
      event.target.style.border = "2px solid red";
      event.target.setCustomValidity('Проверте email');
      console.log('2')
      return;
    } 
      event.target.setCustomValidity('');
      event.target.style.border = "2px solid green";
      let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return regEx.test(String(value).toLowerCase());
});

let password = document.getElementById('password');

password.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length >= 6) {
      event.target.setCustomValidity('');
      event.target.style.border = "2px solid green";
      let regEx = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      return regEx.test(String(value).toLowerCase());
    }
      event.target.style.border = "2px solid red";
      event.target.setCustomValidity('Пароль должен быть более 6 символов и не должен содержать символы');
      console.log('2')
})


// action

let signin = document.getElementById('sign-in');
let signup = document.getElementById('sign-up');

let title_sign_up = document.getElementById('title_sign_up');
let title_sign_in = document.getElementById('title_sign_in');
let button = document.getElementById('button');
let btnSingIn = document.getElementById('btn-sing-in');
let push_reg = document.getElementById('push_reg');
let loading = document.getElementById('loading');
let checkmark = document.getElementById('checkmark');
let successful_reg = document.getElementById('successful_reg');

let signinButtton = document.getElementById('signin_buttton');
let signupButtton = document.getElementById('signup_buttton');


signin.addEventListener("click", function (event) {
  signinButtton.classList.add('is-active');
  signupButtton.classList.remove('is-active');

  title_sign_up.classList.add('displaynone');``
  title_sign_in.classList.remove('displaynone');
  email.classList.add('displaynone');
  push_reg.classList.add('displaynone');
  btnSingIn.classList.remove('displaynone');

  successful_reg.classList.remove('successful_reg');
  username.classList.remove('displaynone');
  password.classList.remove('displaynone');

  button.classList = 'show';
  button.classList.add('button');
  btnSingIn.classList.remove('displaynone');

});
//

signup.addEventListener("click", function (event) {
  signupButtton.classList.add('is-active');
  signinButtton.classList.remove('is-active');

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


  signinButtton.setAttribute("disabled", "true");
  
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

    username.style.border = "2px solid transparent";
    email.style.border = "2px solid transparent";
    password.style.border = "2px solid transparent";

  }, 5000);

  setTimeout( function (){
    username.classList.add('displaynone');
    email.classList.add('displaynone');
    password.classList.add('displaynone');
    signinButtton.classList.add('pulsate');
    successful_reg.classList.add('successful_reg');

    button.className = "hide";
    button.classList.add('displaynone');
    loading.className = "hide";
    checkmark.className = "hide";

    push_reg.classList.add('displaynone')
    signinButtton.disabled = false;
  },6000)
 

  setTimeout( function (){
    signinButtton.classList.remove('pulsate');
  }, 12000)
}); 
