$(document).ready(function() {
    // Agrega el desplazamiento suave a los enlaces de la barra de navegación
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function(){

    $('.navbar #logo, .navbar p').on('click', function(){
        location.reload(true);
    })   
})

$(document).ready(function() {
    $("#ConsultaCliente").submit(function(event){
        event.preventDefault();

        $("#mensajeExito").fadeIn();

        $("#ConsultaCliente")[0].reset();
    });
});


