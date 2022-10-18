const API = "https://rickandmortyapi.com/api/character";

const obtenerInfo = (urlAPI)=>{
    return fetch(urlAPI)
        // Primera linea obtengo el contenido de la url en modo JSON
        .then(response => response.json())
        // en la segunda linea obtengo los datos del contenido
        .then(data=>{
            console.log(data) 
            obtenerCartas(data)           
        })
        .catch(error => {
            console.error(error)
        })
}

function obtenerCartas(character){
    let x= character.forEach(character => {
        
        const article = document.createRange().createContextualFragment(
        `
            <article class="article">
                <h1 class="nombrePersonaje">${character.name}</h1>
    
                <div class="img-container">
                    <img src="${character.image}" alt="Personaje">
                </div>
    
                <div class="caja-caracteristicas">
                    <p class="gender">${character.gender}</p>
                    <p class="status">${character.status}</p>
                </div>
            </article> 
        `)
        const section = document.querySelector("cajaPersonajes");
    
        section.append(article)
        let parrafocharacters= document.getElementById("characters");
        parrafocharacters.style.display = "none";
    })

}