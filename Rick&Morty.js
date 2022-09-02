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

// function selectAllCharacthers(){
//     alert("Seleccionaste categoria All");
//     console.log("Aqui están todos los personajes")

// }

function selectAllCharacthers(done){
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
            .then(data=>{
                done(data)
    });
}
selectAllCharacthers(data => {
    // console.log(data)

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
    const section = document.querySelector("section");

    section.append(article)
    });
} )

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
