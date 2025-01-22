//////////////////////////////////////////////
//Incrementar TamaÃ±o de Fuente
//////////////////////////////////////////////
$('#appBody').adjustFontSize();  


//Llamar la funciÃ³n "actualizarAncho" cada vez que se cambia el tamaÃ±o de la ventana.
$(window).on('resize', actualizarAncho);
$(document).ready(function () {
    
    actualizarAncho();
    //Busqueda al presionar Enter
    $('#rut').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            showResults(this);
            showLoading()
        }
        event.stopPropagation();
    });
    
});

function actualizarAncho(){
    //Modificar el titulo de la aplicacion dependiendo del ancho.
    var width = $(window).width();
    if ($(window).width() < 600) {
        $("#title").html("Ejemplo 2");
    } else{
        $("#title").html(" Ejemplo 2: Buscar por RUT");
    }
};

function showResults(thisCard) {
    setTimeout(function () {
        $('#resultados').show();
        toggleExpandCard(thisCard, 'resultados');
    }, 1000);
}

function showLoading() {
    $('#loadingOverlay').show();
    setTimeout(function () {
        hideLoading();
    }, 1000);
}

function hideLoading() {
    $('#loadingOverlay').hide();
}
