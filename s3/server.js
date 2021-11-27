// Función 1
saludar = nombre => console.log('Hola', nombre)
// Función 2
entrada = (nombre, callback) => callback(nombre)
// Ejecución
// entrada('Andres', saludar)

//////////////////////////////////////////////////

primera = (call1, call2) => {
  setTimeout(() => {
    console.log('1');
    call1()
    call2()
  }, 1000);
}
segunda = () => console.log('2');
tercera = () => console.log('3');

// primera(segunda, tercera)