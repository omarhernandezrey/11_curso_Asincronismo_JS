// Definición de una función llamada "sum" que toma dos números y devuelve su suma
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Definición de una función llamada "calc" que toma dos números y una función de callback
  function calc(num1, num2, callback) {
    // Llama a la función de callback pasando los dos números y devuelve el resultado
    return callback(num1, num2);
  }
  
  // Llama a la función "calc" con los valores 2, 2 y la función "sum" como callback
  console.log(calc(2, 2, sum)); // Imprime: 4
  
  // Utiliza "setTimeout" para ejecutar una función de callback después de 5 segundos (5000 milisegundos)
  setTimeout(function ()  {
      console.log('Hola javascript !!');
  }, 5000);
  
  // Definición de una función llamada "greeting" que toma un nombre como parámetro y lo imprime
  function greeting(name) {
      console.log(`Hola ${name}`);
  }
  
  // Utiliza "setTimeout" para ejecutar la función "greeting" después de 2 segundos (2000 milisegundos)
  // y pasa 'Omar' como argumento para el parámetro "name"
  setTimeout(greeting, 2000, 'Omar'); // Imprime: "Hola Omar" después de 2 segundos
  