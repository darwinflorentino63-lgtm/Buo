// BUO - script.js (archivo limpio y funcional)
// Este archivo NO depende de librerías externas

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    if (!form) {
        console.log("Formulario no encontrado");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = form.querySelector("input[type='email']");
        const email = emailInput ? emailInput.value : "";

        if (email === "") {
            alert("Por favor ingresa un correo válido");
            return;
        }

        alert(
            "🎵 Bienvenido a BUO 🎵\n\n" +
            "Cuenta creada con el correo:\n" +
            email + "\n\n" +
            "BUO no tiene anuncios y la música es tuya 💙"
        );

        form.reset();
    });

});
