//FORMULARIO NOMBRE--------------------------------------------------------------------
document.getElementById("nombre").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtNombre = input.value;
    
    // let o const - formas recomendadas de variables o constantes
    const feedbackNombre = document.getElementById("feedback-nombre");

    if( txtNombre.length < 3 ) {        
        feedbackNombre.innerHTML = "Favor de ingresar mas caracteres.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackNombre.className = "invalid-feedback";
    } else {        
        feedbackNombre.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackNombre.className = "valid-feedback";
    }
});

document.getElementById("apellido").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtApellido = input.value;
    
    const feedbackApellido = document.getElementById("feedback-apellido");

    if( txtApellido.length < 3 ) {        
        feedbackApellido.innerHTML = "Favor de ingresar mas caracteres.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackApellido.className = "invalid-feedback";
    } else {        
        feedbackApellido.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackApellido.className = "valid-feedback";
    }
});


document.getElementById("email").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtEmail = input.value;
    
    const feedbackEmail = document.getElementById("feedback-email");

    if( txtEmail.length < 5 ) {        
        feedbackEmail.innerHTML = "Favor de ingresar mas caracteres.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackEmail.className = "invalid-feedback";
    } else {        
        feedbackEmail.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackEmail.className = "valid-feedback";
    }
});


document.getElementById("telefono").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtTelefono = input.value;
    
    const feedbackTelefono = document.getElementById("feedback-telefono");

    if( txtTelefono.length < 8 ) {        
        feedbackTelefono.innerHTML = "Favor de ingresar un numero valido.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackTelefono.className = "invalid-feedback";
    } else {        
        feedbackTelefono.innerHTML = "Listo";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackTelefono.className = "valid-feedback";
    }
});