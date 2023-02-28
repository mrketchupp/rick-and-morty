/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const API = "https://platzi-avo.vercel.app/api/avo";
const url = "https://platzi-avo.vercel.app/";
const appNode = document.querySelector('#app')

const formatPrice =(precio)=>{

    const newPrice = new window.Intl.NumberFormat('es-mx', {
        style: 'currency',
        currency: 'MXN'
    }).format(precio);

    return newPrice;
}


async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const datos = await response.json();
    console.log(datos.data[1].attributes);
    const todosLosItems = [];
    datos.data.forEach(item => {
        // crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${url}${item.image}`;
        imagen.className = 'w-32 p-4 m-auto h-36';

        // crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = 'text-lg font-bold text-white';

        // crear precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        price.className = 'text-white';

        // crear descripcions
        const taste = document.createElement('p');
        taste.textContent = item.attributes.taste;
        taste.className = 'text-xs text-gray-50';

        // crear icon
        const icon = document.createElement('img')
        icon.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAEdJREFUSEtjZCAS/P///z+yUkZGRkZitBKlCGTQqAUEg3M0iEaDCGcIMKKnDoJhRaKCUQsIBthoYTcaRIgQGC2uCaaGQRtEAIP7YAnS0t94AAAAAElFTkSuQmCC';

        // crear button
        const button = document.createElement('button');
        button.type = 'button';
        button.append(icon);
        button.className = 'w-10 h-10 mt-2 text-base font-medium text-white bg-green-500 rounded-full hover:bg-green-700 flex items-center justify-center';

        const nanoContainer = document.createElement('div');
        nanoContainer.append(price, button)
        nanoContainer.className = 'flex items-center justify-between';

        const miniContainer = document.createElement('div');
        miniContainer.append(title, taste, nanoContainer)
        miniContainer.className = 'p-4 m-3 bg-green-400 rounded-lg';

        const container = document.createElement('div')
        container.append(imagen, miniContainer);
        container.className = 'w-64 p-2 m-auto bg-white shadow-lg rounded-2xl relative flex-shrink-0 max-w-xs mx-2 mb-6';

        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
    appNode.className = 'flex flex-wrap items-center justify-center text-left';
}

fetchData(API)