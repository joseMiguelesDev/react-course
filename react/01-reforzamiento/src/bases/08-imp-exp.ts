// Cuando se importan clases se recomienda usar 'type' para mejorar el rendimiento
import { heroes, type Hero, type Owner } from "../data/heroes.data"

const getHeroById = (id: number): Hero => {
    const hero = heroes.find((hero) => hero.id === id);

    if( !hero ){
        throw new Error(`No existe un heroe con el id ${id}`);
    }

    return hero;
}

// console.log(getHeroById(9))

export const getHeroesByOwner = (own: Owner): Hero[] =>{
    const heroesArr: Hero[] = heroes.filter(
        (hero) => hero.owner === own)
    ;
    return heroesArr
}

