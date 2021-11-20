let moment = require('moment')

const now = moment()

// console.log(`Hoy es ${now} ghjg`);

let operaciones = require('./operaciones')

// operaciones.sumar(5,6)
// operaciones.sumarFlecha(5,6)
// console.log(operaciones.resta(5,6));
// console.log(operaciones.multiplica(5,6));
// console.log(operaciones.divide(5,6));

for (let i = 1; i < 100; i++) {
  if(i % 3 === 0 && i % 5 === 0){
    console.log(`Fizzbuzz ${i}`);
  } else if(i % 3 === 0){
    console.log(`Fizz ${i}`);
  } else if(i % 5 === 0){
    console.log(`Buzz ${i}`);
  }
}