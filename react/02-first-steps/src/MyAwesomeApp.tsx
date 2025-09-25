// Como es una interfaz le vamos a hacer un type
import type { CSSProperties } from "react";

const firstName = "Migueles";
const lastName = "Sánchez";

const favoriteGames = [
    'Elden Ring', 'Smash', 'Metal Gear'
]

// Los elementos booleanos no tienen una representación
// gráfica para React
// Puede representarse con el JSON.stringify
const isActive = true;

// Los objetos literales no permiten ser imprimidos tal cual
const address = {
    zipCode: 'ABC-123',
    country: 'Canadá'
}

export function MyAwesomeApp(){
    /**
     * Existen varias manera de integrar los estilos:
     * - La primera de ellas es en línea pero como estamos en TS, los estilos
     * deben ir dentro de llaves.
     * - La segunda manera es creando el objeto literal con dichos estilos
     * de la siguiente manera con CSSProperties siendo esta una importación de React
     */
    const myStyles: CSSProperties = {
        backgroundColor: 'blue',
        color: '#fff',
        fontSize: 14,
        padding: 20
    }
    return (
        <>
            <h1>{ firstName }</h1>
            <h3>{ lastName }</h3>
            <p>
                { favoriteGames.join(', ') }
            </p>
            <h1>{ isActive ? 'Activo' : 'No activo' }</h1>
            <p
                style={{
                    backgroundColor: '#fafafa',
                    borderRadius: 10,
                    padding: 10
                }}
            >{ JSON.stringify(address) }</p>
            <p
                style={ myStyles }
            >Estos estilos se crearon a partir de un objeto literal</p>
        </>
    )
}