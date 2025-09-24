// Podemos indicar de que tipo van a ser los datos que se introduzcan en el array
// const myArray: (number | string)[] = [1, '2', 3, 4, 5, 6];
const myArray: number[] = [1, 2, 3, 4, 5, 6];

// Para clonar el array usar el operados Spread
// Sin embargo es más recomendado usar el structuredClone
const myArray2 = [ ...myArray ];

myArray2.push(2);

console.log({ myArray, myArray2 });


for (const myNumber of myArray) {
    console.log(myNumber)
}