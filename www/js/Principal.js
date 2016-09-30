$( document ).ready(function() {
    var user=getCookie("user");
    if (user=="") {
        window.location.href = "index";
    }else{
        $('#userInfo').html("<div><strong>"+user+"</strong></div>");
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
        var rHtml ='<p >'+r+' </p>';
        $('#respuesta').html(rHtml);   // Mostrar la respuesta del servidor en el div con el id "respuesta"
        document.cookie = "user=" + $('#user').val()+";path=/";
        window.location.href = "principal";
    }
 
    function logOut(e){
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        window.location.href = "index";
    }
 
    $('#logOut').click(logOut); // Registrar evento al boton "Calcular" con la funcion "peticion"
});