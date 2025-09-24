/**
 * El async y el await nos permite trabajar con promesas y a la vez
 * esperar dichas promesas.
 *
 * Es decir con el async y el await vamos a esperar
 * que se cumpla la promesa para poder seguir ejecutando el código
 * de forma secuencial.
 */

import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'FyNdmBYLgYM5en9SU3kXnVAfj7b5HKTS';


const createImageInsideDOM = ( url: string ) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}



/**
 * Para que el await funcione tiene que estar dentro de una función asíncrona
 * El await lo que hace es pausar la ejecución de forma no bloqueante, es decir, el código
 * sigue su rumbo fuera de la función async y cuando se obtenga el resultado
 * de la promesa se mostrará
 */
const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
}

getRandomGifUrl().then(createImageInsideDOM);
console.log("holi")