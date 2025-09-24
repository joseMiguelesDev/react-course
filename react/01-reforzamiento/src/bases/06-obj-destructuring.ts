const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

/**
 * La desestructuración consiste en descomponer un objeto en sus atributos.
 * No importa el orden. Para asignar los valores de los atributos a nuevas
 * variables se pondrá el nombre de la nueva variable después de 2 puntos
 */
const { name: ironmanName, age: ironmanAge, key } = person;

console.log({ ironmanName, ironmanAge, key })

interface Hero{
    name: string;
    age: number;
    key: string;
    rank: string | undefined;
}


/**
 * Se pueden enviar la desestructuración de un objeto como los parámetros de una función
 */
const useContext = ( { key, age, name, rank='Sin rango' }: Hero) => {
    return {
        keyName: key,
        // Cuando el nombre y el parámetro que se le pasa se llama igual
        // Se puede obviar el nombre de la propiedad ya que lo inferirá
        user: {
            name,
            age
        },
        rank: rank
    }
}


const {
    rank,
    keyName,
    user: {name, age}
} = useContext(person);

console.log({ rank, keyName, name, age })