/**
 * El type fuera indica que todo lo de dentro son tipos
 */
import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'FyNdmBYLgYM5en9SU3kXnVAfj7b5HKTS';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = ( url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

/**
 * Hay que intentar que cada cosa tenga únicamente una responsabilidad.
 * Por ejemplo, el then del fetch lo único que tiene que hacer es traer
 * el elemento o lo que necesitemos y posteriormente delegar el tratamiento
 * de los datos a una función
 */
myRequest
    // Se obtiene el json sin filtrar
    .then((response) => response.json())
    // Se obtiene la data real
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    // Gestión de errors
    .catch((error) => {
        console.log(error);
    })
    // Finalizamos con algo siempre
    .finally(() => {
        console.log("Po se acabo");
    });

