document.getElementById("login-form").addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const usuario       = document.getElementById("usuario").value;
    const contrasena    = document.getElementById("contrasena").value;

    if( usuario == 'anne@gmail.com' && contrasena == '1234') {
        accederAdministracion();
    } else {
        mostrarMensajeError();
    }

    return false;
});

function accederAdministracion() {
    window.location = "private.html";
}

function mostrarMensajeError() {
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = "El usuario o contraseña no es/son correctos!";
    mensajes.classList.remove("d-none");
}