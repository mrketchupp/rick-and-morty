/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// Autor: MrKetchupp
// Por fin tengo los conocimientos para poder usar la API de Rick and Morty
console.log('Mommy Beidou❤️‍🔥')
// API
const API = 'https://rickandmortyapi.com/api';
const appNode = document.querySelector('#app');

// Consultar API
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json()
    return data;
}

// Filtrando Jerrys
async function searchCharacters(urlAPI, name) {
    const jerrys = await fetchData(`${urlAPI}/character/?name=${name}`)
    console.log(jerrys.results[0].image)
    const todosLosItems = []
    jerrys.results.forEach(item => {
        // crear name
        const name = document.createElement('h2');
        name.textContent = item.name;
        name.className = 'text-lg font-medium text-gray-600 dark:text-white'

        // crear status
        const status = document.createElement('p');
        status.textContent = item.status;

        // crear image
        const image = document.createElement('img');
        image.src = item.image;
        image.className = 'mx-auto object-cover rounded-full h-20 w-20';
        item.status == 'Alive' ? image.classList.add('ring-4','ring-green-600', 'ring-offset-2', 'ring-opacity-40'): image.classList.add('ring-4','ring-red-600', 'ring-offset-2', 'ring-opacity-40');

        // crear species
        const species = document.createElement('span');
        species.textContent = item.species;
        species.className = 'text-xs text-gray-400';

        //crear image container
        const imageContainer = document.createElement('div')
        imageContainer.append(image);
        imageContainer.className = 'flex-shrink-0';

        // crear details container
        const detailsContainer = document.createElement('div')
        detailsContainer.append(name, species);
        detailsContainer.className = 'mt-2 text-center flex flex-col';

        // crear mini container
        const miniContainer = document.createElement('div');
        miniContainer.append(imageContainer, detailsContainer);
        miniContainer.className = 'flex-col  flex justify-center items-center';

        // crear contenedor
        const container = document.createElement('div');
        container.append(miniContainer);
        container.className = 'p-4';

        // Agregando al array
        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
    appNode.className = 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'
}

searchCharacters(API, "jerry");

//condition ? true_expression : false_expression

const age = 20;

const age_group = age < 18 ? "Child" : "Adult";