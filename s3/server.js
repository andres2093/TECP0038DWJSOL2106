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

// Reto 1
const https = require('https')

ordernar = res => {
  console.log(res[0].films.length);
  console.log(res[0].name);

  res.sort((a, b) => {
    if (a.films.length > b.films.length) {
      return 1;
    }
    if (a.films.length < b.films.length) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  res.sort((a, b) => a.name.localeCompare(b.name))

  console.log(res[0].films.length);
  console.log(res[0].name);

  // for(i in res){
  //   console.log(res[i].name);
  //   console.log(res[i].gender);
  // }
}

ejecutarWs = callback => {
  https.get('https://swapi.dev/api/people/', res => {
    let data = ''

    res.setEncoding('utf-8')
    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      try {
        let body = JSON.parse(data)
        callback(body.results)
      } catch (error) {
        console.log(error);
      }
    })
  }).on('error', err => console.log('Error', err))
}

ejecutarWs(ordernar)