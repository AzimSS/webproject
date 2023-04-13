let signInBtn = document.querySelector('.signin_btn');
let signUpBtn = document.querySelector('.signup_btn');
let formBox = document.querySelector('.form_box');
let body = document.body;

signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    body.classList.remove('active')
});