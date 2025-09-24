/**
 * Las enumeraciones se definen de eesta manera.
 * Los objetos se declaran arriba y el resto debajo
 */
export interface Hero{
    id: number;
    name: string;
    owner: Owner;
}

// Tipo de dato nuevo
// type Owner = 'DC' | 'Marvel';

// Enumeración
export enum Owner {
    DC = 'DC',     // Esto será 0
    Marvel = 'Marvel',  // Esto será 1
    Otro = 'Otro'
}


// Cuando se antepone 'export' va a permitir que se exporte a otro archivo
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC,
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel,
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC,
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC,
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel,
    },
    {
        id: 6,
        name: 'Green lantern',
        owner: Owner.DC
    }
];

// Si quisieramos exportar por defecto habría que hacer y podríamos renombrar la variable
// Se aconseja la otra exportación aunque esta tiene sus ventajas
export default heroes