// Agrega el desplazamiento suave a los enlaces de la barra de navegación.
$(document).ready(function () {
    // Selecciono todos los elementos <a> dentro de la clase navbar-nav y agrego controlador para el evento clic.
    $(".navbar-nav a").on('click', function (event) {
        // Valida si el hash del enlace no esta vacio. El hash es la URL que sigue al simbolo #
        if (this.hash !== "") {
            // Se elimina el comportamiento por default del enlace, este seria bajar de forma rapida a la ubicación del Href.
            event.preventDefault();
            // Almacena el valor del atributo hash para su uso posterior.
            var hash = this.hash;
            /* Se seleccionan los elementos <html> y <body> para que funcione en diferentes navegadores.
             Con la función animate logro el desplazamiento suave deseado.*/
            $('html, body').animate({
                //Realizo la animación del desplazamiento.
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Con window.locate actualizo la URL en la barra del navegador para reflejar el cambio de posición.
                window.location.hash = hash;
            });
        }
    });
    /* Al presionar el icono o la palabra viajes chile en el nav, la pagina se recarga.
    Selecciono los elementos #logo y <p> de la clase navbar asigno el evento on, con ello logro que al hacer click sobre alguno de los dos se cumpla la función.*/
    $('.navbar #logo, .navbar p').on('click', function () {
        // con el metodo reload recargo el elemento location colocar el parametro true por defecto.
        location.reload(true);
    });
    /* Al presionar el buttom del formulario este debe arrojar mensaje de comprobación de que se envio el formulario y debe reiniciar los input ingresado en cada elemento del formulario.
    Selecciono el formulario y asigno una funcion al evento de envío del formulario.*/
    $("#ConsultaCliente").submit(function (event) {
        // Evita el comportamiento predeterminado del formulario.
        event.preventDefault();
        // Selecciona el ID del DOM y aplica el efecto fadeIn, el cual muestra el elemento gradualmente.
        $("#mensajeExito").fadeIn();
        // Selecciona el formulario y con el metodo reset() restablece los campos del formulario.
        $("#ConsultaCliente")[0].reset();
    });
});