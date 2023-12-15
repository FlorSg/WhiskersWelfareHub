

function login(){
    const user = document.getElementById('emailtext').value;
    const pass = document.getElementById('password').value;
    console.log('login funcionando!')

    if(user === 'Admin' && pass === 'Admin123'){
        alert('Bienvenido señor Stark');
        window.location.href = 'https://whiskerswelfarehub.netlify.app/crud-web/productos.html'
    }
}