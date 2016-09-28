function myFunction(elmnt,clr) {
    window.alert(5 + 6);
}

$(function(){
	
	
    function siRespuesta(r){
 
        // Crear HTML con las respuestas del servidor
        var rHtml =  r + <br/>';
         console.log(r);
        $('#respuesta').html(rHtml);   // Mostrar la respuesta del servidor en el div con el id "respuesta"
    }
 
    function siError(e){
                var rHtml = 'Error: ' + e.statusText+'<br/>';
 
        $('#respuesta').html(rHtml);   // Mostrar la respuesta del servidor en el div con el id "respuesta"
    }
 
    function peticion(e){
 
        // Obtener valores de los campos de texto
        var parametros = {
            nombre: $('#nombre').val(),
            apellido1: $('#apellido1').val(),
            apellido2: $('#apellido2').val(),
            user: $('#user').val(),
            password: $('#password').val()

        };
        console.log(parametros);
 
        // Realizar la petición
    	var post = $.post(
                              "php/registrar.php",    // Script que se ejecuta en el servidor
    	                      parametros,    	                       
    	                      siRespuesta,    // Función que se ejecuta cuando el servidor responde
    	                      'html'          // Tipo de respuesta del servidor
                              );
 
        /* Registrar evento de la petición (hay mas)
           (no es obligatorio implementarlo, pero es muy recomendable para detectar errores) */
 
    	post.error(siError);         // Si ocurrió un error al ejecutar la petición se ejecuta "siError"
    }
 
    $('#logIn').click(peticion); // Registrar evento al boton "Calcular" con la funcion "peticion"
});