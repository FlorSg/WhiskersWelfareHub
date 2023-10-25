const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.getElementById('btnlogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', () => {
    document.querySelector('.btnlogin-popup').innerHTML = "Registrarse";
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    document.querySelector('.btnlogin-popup').innerHTML = "Inicia Sesion";
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});











































































// btnOpenResponsive.addEventListener('click', () => {
//     navbar.classList.add('active');
// });

// btnClose.addEventListener('click', () => {
//     navbar.classList.remove('active');
// });