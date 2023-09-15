// Importa el módulo 'xmlhttprequest' para usar la clase XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest');

// Definición de la URL base de la API
const API = 'https://escuelajs.co/apiv1';

// Función para realizar una solicitud HTTP GET y obtener datos de la API
function fetchData(urlApi, callback) {
    // Crea una instancia de XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    // Configura la solicitud GET a la URL proporcionada de forma asíncrona
    xhttp.open('GET', urlApi, true);

    // Establece una función para manejar los cambios en el estado de la solicitud
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { // Cuando se completa la solicitud
            if (xhttp.status === 200) { // Si la respuesta es exitosa (código 200)
                // Llama al callback con null como primer argumento (sin error) y los datos JSON parseados como segundo argumento
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // Si la respuesta no es exitosa, crea un nuevo objeto Error y llama al callback con el error
                const error = new Error('Error en la solicitud a ' + urlApi);
                return callback(error, null);
            }
        }
    };

    // Envía la solicitud HTTP GET
    xhttp.send();
}
