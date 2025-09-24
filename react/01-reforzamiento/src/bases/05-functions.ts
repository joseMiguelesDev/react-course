// Podemos indicar de que tipo es cada parámetro de la función
// Podemos indicar también el retorno de la función
function greet( name: string ):string {
    return `Hola ${name}`;
}


// Funciones de flecha
/**
 * En este caso greet2 no es el nombre de la función si no en lugar que ocupa en memoria
 * es decir, asignamos una función a la variable greet2 guardándola así en memoria.
*
* Beneficios:
* - No cambia a donde apunta el objeto this
* - Es mucho más sencillo de leer
* - Se puede eliminar corchetes y return si es lo único que hace
 */
const greet2 = (name: string) => `Hola ${name}`


interface User{
    uid: string;
    username: string;
}

function getUser():User {
    return {
        uid: 'ABC-123',
        username: 'El papi23'
    };
}

/**
 * Cuando en las funciones de flecha se quiera eliminar el cuerpo por que sólamente
 * se hace el return pero esta vez de un objeto, hay que envolver entre paréntesis
 * dicho objeto
*
*/
const getuser2 = ():User => ({
    uid: 'ABC-321',
    username: 'El hijo32'
});

const msg = greet('Goku');
const msg2 = greet2('Vegeta');
console.log({ msg, msg2 })


const user = getUser();
const user2 = getuser2();
console.log(user, user2)


/**
 * Utilidad de las funciones de flecha en los callbacks.
 * Comparación entre las funciones tradicionales y las funciones flecha
 */

const myNumbers: number[] = [1, 2, 3, 4, 5, 6];

// A esta función se le puede pasar un callback
myNumbers.forEach(function(value){
    console.log({ value });
});

// Con función de flecha. Es prácticamente una única línea.
myNumbers.forEach((value) => console.log(value));
