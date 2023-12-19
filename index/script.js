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

// Validacion FORMULARIO

function validar(){
    const name = document.getElementById('nombre');
    const lastName = document.getElementById('apellido');
    const email = document.getElementById('email');
    const msg = document.getElementById('mensaje');
    console.log(name.value)
    console.log(lastName.value)
    console.log(email.value)
    console.log(msg.value)
    let error = false;

    if(name.value == ''){
        document.getElementById('validar_name').innerHTML = 'Este campo es obligatorio';
        error = true;
        name.focus();
    }
    if(lastName.value == ''){
        document.getElementById('validar_lastName').innerHTML = 'Este campo es obligatorio';
        error = true;
        lastName.focus();
    }
    if(email.value == ''){
        document.getElementById('validar_email').innerHTML = 'Este campo es obligatorio';
        error = true;
        email.focus();
    }
    if(msg.value.length == 10){
        document.getElementById('validar_msg').innerHTML = 'Por favor, ingrese su mensaje';
        error = true;
        msg.focus();
    }
    if(error == false){
        document.getElementById('nombre').value = '';
        document.getElementById('validar_name').innerHTML ='&nbsp;';
        document.getElementById('email').value = '';
        document.getElementById('validar_email').innerHTML ='&nbsp;';
        document.getElementById('mensaje').value ='';
        document.getElementById('validar_msg').innerHTML ='&nbsp;';
        alert("Gracias, responderemos a la brevedad");
        const form = document.getElementById('form');
    }
}
