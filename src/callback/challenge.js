// Importa la clase XMLHttpRequest del módulo 'xmlhttprequest'
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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

// Realiza tres solicitudes anidadas a la API utilizando callbacks
fetchData(`${API}/products`, function (error1, data1) {
    if (error1) {
        console.error(error1);
    } else {
        // Si la primera solicitud fue exitosa, realiza una segunda solicitud anidada
        fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
            if (error2) {
                console.error(error2);
            } else {
                // Si la segunda solicitud fue exitosa, realiza una tercera solicitud anidada
                fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
                    if (error3) {
                        console.error(error3);
                    } else {
                        // Si la tercera solicitud fue exitosa, imprime los datos obtenidos
                        console.log(data1[0]);
                        console.log(data2.title);
                        console.log(data3.name);
                    }
                });
            }
        });
    }
});
