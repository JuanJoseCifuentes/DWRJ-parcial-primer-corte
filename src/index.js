import RickAndMortyService from './service.js';


// acá deberás crear una instancia del servicio RickAndMortyService
const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto


async function createCharacterList() {
    const list = document.getElementById("char-list");
    const data = await service.getAllCharacters();
    
    // llamar primero createCharacterCard(character);
    // llamar segundo addCharacterListeners(character);
    var finalInnerHtml = "";
    for (let i = 0; i < 8; i++){
        finalInnerHtml += createCharacterCard(data[i]);
    }

    list.innerHTML += finalInnerHtml;

    addCharacterListeners();
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje


function createCharacterCard(character) {
    return `
    <div class="char-card">
                <img class="char-img" src="${character.image}" alt="Foto de ${character.name}">
                <div class="content">
                    <div class="text-content">
                        <div class="name">${character.name}</div>
                        <div class="info">
                            <div class="tag">
                                <img class="tag-icon ${character.status}" src="./assets/live.svg" alt="status">
                                <div>${character.status}</div>
                            </div>
                            <div class="tag">
                                <img class="tag-icon" src="./assets/race.svg" alt="race">
                                <div>${character.species}</div>
                            </div>
                            <div class="tag">
                                <img class="tag-icon" src="./assets/planet.svg" alt="planet">
                                <div>${character.firstSeen}</div>
                            </div>
                        </div>
                    </div>
                    <button class="fav", data-char="${character.name}"><img src="./assets/heart.svg" alt="Like"></button>
                </div>
            </div>
    `
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click en el icono de corazon
// cuando se haga click al icono de corazon aparecer una alerta con un mensaje 
// que diga Hola soy (nombre personaje), recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners() {
    const btns = document.querySelectorAll(".fav");

    function handleClick(e) {
        alert(`Hola, soy ${e.currentTarget.dataset.char}\n`);
    }

    btns.forEach((btn) => {
        btn.addEventListener("click", handleClick);
    })
}


// por último se llama la función y se renderiza la vista
createCharacterList();
