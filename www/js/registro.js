
$( document ).ready(function() {
    var user=getCookie("user");
    if (user!="") {
        window.location.href = "principal";
    }
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

$(function(){
	
	
    function siRespuesta(r){
 
        // Crear HTML con las respuestas del servidor
        var rHtml ='<p>Usuario Creado  <br/></p>';
        rHtml +=   '<a  id = "logIn" class="btn btn-lg btn-success btn-block"  href = "index">Iniciar Sesion</a>';
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
        if ($('#password').val() == $('#passwordConfirm').val()) {
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
        } else {
                    // Crear HTML con las respuestas del servidor
        var rHtml ='<p>Las contraseñas no coinciden  <br/></p>';
        $('#error').html(rHtml);   // Mostrar la respuesta del servidor en el div con el id "respuesta"
        }

    }
 
    $('#logIn').click(peticion); // Registrar evento al boton "Calcular" con la funcion "peticion"
});