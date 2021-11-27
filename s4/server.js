// Para el reto
// const operador = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// switch (operador) {
//   case '+':
//     console.log(num1, operador, num2, "=", num1 + num2);
//     break;
//   case '-':
//     console.log(num1, operador, num2, "=", num1 - num2);
//     break;
//   case 'x':
//     console.log(num1, operador, num2, "=", num1 * num2);
//     break;
//   case '/':
//     console.log(num1, operador, num2, "=", num1 / num2);
//     break;
//   default:
//     console.log("Error");
//     break;
// }

////////////////////////////

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// readline.question('¿Quién eres?', name => {
//   console.log('Hola', name);
// })

const question = () => (
  new Promise((resolve, reject) => {
    readline.question('¿Quién eres?', name => {
      console.log('Hola', name);
      resolve()
    })
  })
)

const question1 = () => (
  new Promise((resolve, reject) => {
    readline.question('¿Qué quieres hacer?', name => {
      console.log('Hola', name);
      process.stdout.write('\033c');
      main()
      resolve()
    })
  })
)

const main = async () => {
  await question()
  await question1()
}

main()

// readline.question('¿Qué quieres hacer?', name => {
//   console.log('Hola', name);
// })