/**
 * Si sabemos que el valor de la variable nunca va a cambiar, es mejor crearla con const
 * Al crearla con const es más ligero el código ya que no tiene los métodos para mutar su valor.
 * Literalmente tiene la mitad del peso de una variable let. TypeScript no informará del tipo si no se
 * indica en constantes, por lo que se le tiene que indicar si se necesita.
 */
const firstName: string = 'José';
const lastName: string = 'Migueles';

// Type detecta automáticamente el tipado por lo que si se intenta modificar el contenido dará un error
let diceNumber = 5;
// diceNumber = '3'; -> Dará un error por tipado a String no permitido

const containsLetterH = lastName.includes('M');

// Incluir el nombre de la variable entre corchetes permite que el
// console.log devuelva también el nombre de la variable
console.log({containsLetterH, diceNumber, firstName, lastName})

