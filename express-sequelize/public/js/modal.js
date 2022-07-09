var loginModal = document.getElementById('login-modal');
var registerModal = document.getElementById('register-modal');

let loginButton = document.getElementById('login-btn');
let registerButton = document.getElementById('register-btn');
let spanClose = document.getElementsByClassName('span-close');
let cancelButtonLogin = document.getElementById('cancel-btn-login');
let cancelButtonRegister = document.getElementById('cancel-btn-register');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }

    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

function revealModal(event) {
    // console.log(event.target.innerHTML)
    if (event.target.innerHTML === 'Login') {
        // console.log("LOGIN");
        loginModal.style.display = 'block';
    }

    if (event.target.innerHTML === 'Register') {
        // console.log("REGISTER");
        registerModal.style.display = 'block';
    }

}

function hideModal(event) {
    // let indicator = event.target.id.split('-')[2];
    // console.log(indicator)
    // console.log(event.target.innerHTML.trim())
    if (event.target.innerHTML.trim() === 'Cancel') {
        // console.log("CANCEL");
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }
    if (event.target.innerHTML.trim() === '×') {
        // console.log("×");
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }
}

loginButton.addEventListener('click', revealModal);
registerButton.addEventListener('click', revealModal);
cancelButtonLogin.addEventListener('click', hideModal);
cancelButtonRegister.addEventListener('click', hideModal);
spanClose[0].addEventListener('click', hideModal);
spanClose[1].addEventListener('click', hideModal);