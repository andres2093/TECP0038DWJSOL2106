const path = require('path')
// const server = require(path.join(__dirname, '', 'server.js'))
const fs = require('fs')

// console.log(__dirname);

// fs.writeFile(
//   path.join(__dirname, '/ejemplo_1.txt'), 
//   'Este es el contenido de mi archivo', 
//   { encoding: 'utf-8' },
//   err => {
//     if(err) throw err
//     console.log('Archivo creado!!!');
//   }
// )

// fs.readFile(
//   path.join(__dirname, '/ejemplo_1.txt'), 
//   { encoding: 'utf-8' },
//   (err, data) => {
//     if(err) throw err
//     console.log('Lectura: ', data);
//   }
// )

// fs.appendFile(
//   path.join(__dirname, '/ejemplo_1.txt'), 
//   '\nEsto es una nueva línea',
//   err => {
//     if(err) throw err
//     console.log('Archivo actualizado!!!');
//   }
// )

fs.writeFileSync(
  path.join(__dirname, '/ejemplo_1.txt'), 
  'Este es el contenido de mi archivo', 
  { encoding: 'utf-8' }
)
console.log('Archivo creado!!!');

let data = fs.readFileSync(
  path.join(__dirname, '/ejemplo_1.txt'), 
  { encoding: 'utf-8' }
)
console.log('Lectura: ', data);

fs.appendFileSync(
  path.join(__dirname, '/ejemplo_1.txt'), 
  '\nEsto es una nueva línea',
)
console.log('Archivo actualizado!!!');