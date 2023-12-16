
function login(){
    const user = document.getElementById('emailtext').value;
    const pass = document.getElementById('password').value;
    console.log('login funcionando!')

    if(user === 'Admin' && pass === 'Admin123'){
        alert('Bienvenido señor Stark');
        console.log(window.location)
        window.location = "https://whiskerswelfarehub.netlify.app/CRUD-WEB/productos.html";
        console.log(window.location)
    }
}