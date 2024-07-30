function handleLogin(event) {
    event.preventDefault();
    window.location.href = 'menu.html';
}
function asociarse(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    window.location.href = 'register.html'; // Redirige a la página de registro
}