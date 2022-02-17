document.getElementById("formulario.form").addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const usuario     = document.getElementById("validationTooltip01").value;
    const apellido    = document.getElementById("validationTooltip02").value;
    const direccion   = document.getElementById("validationTooltip03").value;
    const numero      = document.getElementById("validationTooltip04").value;
    const telefono    = document.getElementById("validationTooltip05").value;
    const correo      = document.getElementById("validationTooltip06").value;
    const tapa        = document.getElementById("validationTooltip07").value;

    if(usuario.length < 3 ){
        comentario.ok();
        

        function comentario.ok 