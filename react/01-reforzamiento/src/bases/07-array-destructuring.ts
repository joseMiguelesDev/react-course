
const characterNames = ['Goku', 'Vegeta', 'Trunks'];


/**
 * La desestructuración de arrays se realiza con corchetes y
 * en este caso si que es importante el ORDEN
 */
const [ p1, p2, p3 ] = characterNames;

console.log({ p1, p2, p3 });

/**
 * Si tenemos claro que tipo de valores se van a devolver siempre
 * en la misma posición se hará con un as const para
 * que TS sepa con que tipo de dato trabaja
 *
 * */
const returnsArrayFn = () => {
    return ['ABC', 123] as const
}

const [ letters, numbers ] = returnsArrayFn();
console.log(letters, numbers);

/**
 * Crea una función llamada useState. Debe cumplir con los siguientes requisitos:
 * - La función debe llamarse useState
 * - Debe retornar un arreglo con dos elementos
 * - El primero es un string
 * - El segundo es una función anónima de flecha que
 *  - Recibe un string
 *  - Imprime ese string por consola
 */
const useState = (name: string) => {
    return [
        name,
        (cad: string) => console.log(cad)
    ] as const // El as const es necesario, si no no sabrá que es una función
}

const [name, setName] = useState('Goku')
console.log(name);
setName('Vegeta');
