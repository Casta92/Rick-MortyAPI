const API = 'https://rickandmortyapi.com/api/character/';


const obtenerInformacion = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(data => { 
            imprimirCartas(data)
            //acedemos a esa info con json.info
            imprimiPaginas(data.info)
            console.log("data ===> " ,data)
        })
        .catch (error => {
            console.log(error)
        })
}


const imprimirCartas = (data) => {
    document.querySelector(".important-cards").innerHTML = "";
    data.results.forEach(element => {
        const  article = document.createRange().createContextualFragment(
            `<div class="image-container">
                <h2 class="tittle-h2">${element.name}</h2>
                <div class="characters" >
                    <img src="${element.image}" alt="Personaje">
                </div>
                <span id="info-gender">${element.gender}</span> 
                <span id="info-status">${element.status}</span>
            </div> `)
//El método append() se usa para insertar contenido nuevo dentro de un elemento existent
        document.querySelector(".important-cards").append(article)
    });
    
}

//next and previous 
const imprimiPaginas = (info) => {
    let html = `<li class="page-item"><a class="page-link onclick="obtenerInformacion('${info.prev}')">Previous</a></li>`
    html += `<li class="page-item"><a class="page-link" onclick="obtenerInformacion('${info.next}')">Next</a></li>`
    document.getElementById("pagination").innerHTML = html
}

obtenerInformacion(API);