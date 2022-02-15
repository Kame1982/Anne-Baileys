// se implementa verificador de largo de password, ya que validacion de correo se hizo en css por medio de la definicion de la variable email, necesito agregar "@" para que sea un item valido. validacion se hizo en base a modelo de clases

document.getElementById("floatingPassword").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtpassword = input.value;

    // let o const - formas recomendadas de variables o constantes
    const feedbackpassword = document.getElementById("feedback-password");

    if( txtpassword.length < 8 ) {        
        feedbackpassword.innerHTML = "Tu clave debe de tener al menos 8 digitos.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackpassword.className = "invalid-feedback";
    
    } else {        
        feedbackcorreo.innerHTML = "Tu clave cumple la seguridad minima";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackcorreo.className = "valid-feedback";
    }
});