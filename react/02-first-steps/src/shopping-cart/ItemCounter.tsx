import { useState } from "react";

import './ItemCounter.css';

interface Props{
    productName: string;
    // Con el símbolo de ? se hará opcional o | undefined
    // Pero si pones undefined, el atributo debe estar obligatoriamente
    // aunque no tenga valor
    quantity: number | undefined;
}

// La manera de pasar los argumentos es desestructurando el objeto
// Hay que intentar tener la lógica fuera de la template que devolvemos en el return
export const ItemCounter = ({ productName, quantity = 1 }: Props) => {

    // LOS HOOKS VAN SIEMPRE AL INICIO DEL COMPONENTE
    //! useEffect, useState y useContext son los HOOKS

    // useState es un array y devuelve 2 elementos. Por eso se desestructura como los arrays
    const [ count, setCount ] = useState(quantity);
    // No se recomienda usar setCount(X) sin más en este punto fuera de los eventos
    // por lo que hará React será redibujar el componente

    // Si no recibe ningún argumento podemos meter la función sin más en el evento del elemento
    // Cada vez que se ejecuta el render del componente al hacer setCount sólamente cambia
    // El count ya que el estado se mantiene entre renders.
    const handleAdd = () => setCount(count + 1);
    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }

    return (
        <section
            className="item-row"
            // style={{
            //     display: 'flex',
            //     alignItems: 'center',
            //     gap: 10,
            //     marginTop: 10
            // }}
        >
            <span
                className="item-text"
                style={{
                    color: count === 1 ? 'red': 'black'
                }}
            >{productName}</span>
            <button
                onClick={handleAdd}
            >+1</button>
            <span>{ count }</span>
            <button
                onClick={handleSubtract}
            >-1</button>
        </section>
    )
}
