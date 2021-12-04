// HEROES
let heroes = () => {
    const header = document.getElementById('heroesHeader')
    const section = document.getElementById('heroesSection')

    let addHeader = (jsonObj) => {
        let h1 = document.createElement('h1')
        h1.textContent = jsonObj['squadName']
        header.appendChild(h1)

        let p = document.createElement('p')
        p.textContent = 'De: ' + jsonObj['homeTown'] + ' // Formado: ' + jsonObj['formed']
        header.appendChild(p)
    }

    let addSection = (jsonObj) => {
        let heroes = jsonObj['members']

        for (let i = 0; i < heroes.length; i++) {
            let article = document.createElement('article')
            let h2 = document.createElement('h2')
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let ul = document.createElement('ul')

            h2.textContent = heroes[i].name
            p1.textContent = 'Identidad secreta: ' + heroes[i].secretIdentity
            p2.textContent = 'Edad: ' + heroes[i].age
            p3.textContent = 'Poderes:'

            let superPowers = heroes[i].powers;
            for (let j = 0; j < superPowers.length; j++) {
                let li = document.createElement('li')
                li.textContent = superPowers[j]
                ul.appendChild(li)
            }
        
            article.appendChild(h2)
            article.appendChild(p1)
            article.appendChild(p2)
            article.appendChild(p3)
            article.appendChild(ul)
        
            section.appendChild(article)
        }
    }

    let url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
    fetch(new Request(url))
        .then(response => response.json())
        .then(jsonObj => {
            console.log(jsonObj)
            addHeader(jsonObj)
            addSection(jsonObj)
        })
        .catch(error => console.error(error))
}
// FIN HEROES

// PAISES
let paises = (region) => {
    const header = document.getElementById("paisesHeader")
    
    //remover vistas
    let child = header.lastElementChild
    while(child){
        header.removeChild(child)
        child = header.lastElementChild
    }

    let addPaises = (jsonObj) => {
        for (let i = 0; i < jsonObj.length; i++) {
            let pais = jsonObj[i]

            let h2 = document.createElement('h2')
            h2.innerText = pais.name.common

            let img = document.createElement('img')
            img.setAttribute("src", pais.flags.png);
            img.setAttribute("width", "304");
            img.setAttribute("height", "228");

            header.appendChild(h2)
            header.appendChild(img)
        }
    }

    let url
    if(region == null){
        url = 'https://restcountries.com/v3.1/all'
    } else {
        url = 'https://restcountries.com/v3.1/region/' + region
    }

    fetch(new Request(url))
        .then(response => response.json())
        .then(jsonObj => {
            console.log(jsonObj)
            addPaises(jsonObj)
        })
        .catch(error => console.error(error))
}
// FIN PAISES

// var url = 'https://example.com/profile';
// var data = {username: 'example'};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));

document.addEventListener("DOMContentLoaded", function(event) {
    heroes()
});