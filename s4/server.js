const readline = require('readline');
const fs = require('fs')

let opcion, num1, num2, text = '';

let interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = () => {
  console.log('Operaciones disponibles');
  console.log('1) Para sumar');
  console.log('2) Para restar');
  console.log('3) Para multiplicar');
  console.log('4) Para dividir');
  console.log('5) Salir');
}

const question1 = () => {
  return new Promise((resolve, reject) => {
    interface.question('Que operación quieres realizar? ', answer => {
      if(isNaN(answer)){
        process.stdout.write('\033c');
        console.log('Agrega una opción valida!');
        main();
      } else if(parseInt(answer) < 5){
        opcion = answer
        resolve();
      } else if(answer === "5"){
        interface.close();
      } else {
        process.stdout.write('\033c');
        console.log('Agrega una opción valida!');
        main();
      }
    })
  })
}

const question2 = (isFirst) => {
  return new Promise((resolve, reject) => {
    interface.question('Primer número: ', answer => {
      if(!isNaN(answer)){
        num1 = parseInt(answer);
        // isFirst ? 'si' : 'no'
        // if (isFirst) 
        //   num1 = parseInt(answer);
        // else 
        //   num2 = parseInt(answer);
        resolve()
      } else {
        process.stdout.write('\033c');
        console.log('Agrega un número!');
        main();
      }
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    interface.question('Segundo número: ', answer => {
      if(!isNaN(answer)){
        num2 = parseInt(answer);
        resolve()
      } else {
        process.stdout.write('\033c');
        console.log('Agrega un número!');
        main();
      }
    })
  })
}

const again = () => {
  return new Promise((resolve, reject) => {
    interface.question('Quieres realizar otra operación? \n1) Si, 2) No ', answer => {
      if(answer === "1"){
        process.stdout.write('\033c')
        main()
      } else {
        // fs.appendFile(`${new Date().getTime()}.txt`, text, function (err) {
        //   console.log(err ? 'Error: ' + err : 'Archivo creado correctamente');
        // })
        fs.writeFileSync(`${new Date().getTime()}.txt`, text, { encoding: 'utf-8' });
        console.log('Archivo creado correctamente!');
        interface.close();
      }
      resolve()
    })
  })
}

const calc = () => {
  let res;
  switch (opcion) {
    case "1":
      res = num1 +  '+' +  num2 +  " = " + (num1 + num2);
      break;
    case "2":
      res = num1 +  '-' +  num2 +  " = " + (num1 - num2);
      break;
    case "3":
      res = num1 +  '*' +  num2 +  " = " + (num1 * num2);
      break;
    case "4":
      res = num1 +  '/' +  num2 +  " = " + (num1 / num2);
      break;
    default:
      res = "Error";
      break;
  }
  console.log(res);
  res += '\n';
  text += res;
}

const main = async () => {
  menu()
  await question1()
  await question2()
  await question3()
  calc()
  await again()
}

main()