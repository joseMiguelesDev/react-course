// Al abrir y cerrar objetos se están creando los literales - Objetos
// Al poner el ratón sobre la constante, podremos ver el tipado en cada atributo
// Lo que hay dentro está en memoria que es lo que puede cambiarse
// Pero el objeto en sí no puede reasignarse
// Con control + f2 podremos refactorizar el nombre de todas las variables que se llamen igual
const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 14500,
        city: 'Puente Genil'
    }
}

console.log({ ironman });

// Esta asignación no sería válida por que apuntan al mismo objeto en memoria
// const spiderman = ironman;

/**
 * Para clonar un objeto en TS o JS hay que utilizar el operador Spread -> {...}
 * Esto es así por que rompen la referencia directa en memoria.
 * Sin embargo, si existen más objetos internos no rompera la referencia directa de dicho
 * objeto y se compartirá en memoria. El operador Spread sólamente actua al primer nivel
 */
// const spiderman = { ...ironman };

/**
 * Si queremos crear un clon real tendremos que usar una función de JS conocida como
 * structuredClone. Esto funciona a todos los niveles
 */
// const spiderman = structuredClone(ironman);


// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'New York'

// console.log({ironman, spiderman});

// Vamos a aprender definir interfaces.
/**
 * Las interfaces nos van a permitir establecer una base para los objetos
 * que se creen de un tipo concreto. Las interfaces no son compatibles con JS
 * La interfaz solo define atributos pero no comportamiento.
 */
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

// Con control + . Nos podemos agregar todas las properties faltantes de un tirón
const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 22,
    address: {
        postalCode: 'ABC-123',
        city: 'Puente Genil'
    }
}

console.log({ spiderman });
