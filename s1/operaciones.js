// console.log(sumar(4,5));


// function sumar(num1, num2) {
//   // console.log('Sumar');
//   return num1 + num2;
// }

// sumarFlecha = (num1, num2) => {
//   return num1 + num2
// }

// console.log(sumarFlecha(4,5));

function sumar(num1, num2) {
  console.log('Sumar');
  console.log(num1 + num2);
}

sumarFlecha = (num1, num2) => {
  console.log('Sumar flecha');
  console.log(num1 + num2);
}

resta = (num1, num2) => num1 - num2

multiplica = (num1, num2) => num1 * num2

divide = (num1, num2) => num1 / num2

// module.exports = sumar

module.exports = {
  sumar,
  sumarFlecha,
  resta,
  multiplica,
  divide
}