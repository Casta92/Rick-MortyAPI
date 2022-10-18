let allCharacters = document.querySelector("#AllCharacters");
let females = document.querySelector("#FemalesCharacters");
let males = document.querySelector("#MalesCharacters");
let alive = document.querySelector("#AliveCharacters");
let dead = document.querySelector("#DeadCharacters");

allCharacters.addEventListener("click", selectAllCharacthers);
females.addEventListener("click", selectFemales);
males.addEventListener("click", selectMales);
alive.addEventListener("click", selectAlive);
dead.addEventListener("click", selectDead);

const url= "https://rickandmortyapi.com/api/character"

// function selectAllCharacthers(){
//     alert("Seleccionaste categoria All");
//     console.log("Aqui están todos los personajes")

// }

function selectAllCharacthers(){
    selectCharacters(url);
}

function selectCharacters(urlType) {
    fetch(urlType)    
    .then(res => res.json())
    .then(data=> setCharacters(data));
}


function setCharacters(data) {
    const section = document.querySelector("section");
    section.innerHTML = "";

    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html */ `
            <article class="article">
                <h1 class="nombrePersonaje">${personaje.name}</h1>

                <div class="img-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>

                <div>
                    <p class="gender">${personaje.gender}</p>
                    <p class="status">${personaje.status}</p>
                </div>
            </article>
        `);
        
        section.append(article)
        
    });
    const prevNext = document.createRange().createContextualFragment(`
        <div class="pagination-button-container">
            <ul class="pagination" id="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </div>
    
    `)


    section.append(prevNext)
}

function selectFemales(){
    console.log("Females")
}

function selectMales(){
    // alert("Seleccionaste categoria females");
    console.log("Males")
}

function selectAlive(){
    // alert("Seleccionaste categoria females");
    console.log("Aive")
}

function selectDead(){
    // alert("Seleccionaste categoria females");
    console.log("Dead")
}