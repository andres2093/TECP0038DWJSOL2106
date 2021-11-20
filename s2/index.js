// const http = require("http")

// let server = http.createServer((req, res) => {
//   res.end('Hola mundo!!!')
// })

// server.listen(3000, () => {
//   console.log("Servidor escuchando en el puerto: " + "localhost:3000");
// })

const https = require('https')

getData = () => {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res) => {
    let data = ''

    res.setEncoding('utf-8')
    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      try {
        let body = JSON.parse(data)
        console.log('Fecha: ', body.date);
        console.log('\nDescripción: ', body.explanation);
        console.log('\nUrl: ', body.url);
      } catch (error) {
        console.log("Error: Json ", error.message);
      }
    })
  }).on('error', err => {
    console.log("Error: ", err.message);
  })
}

getData()