import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart{
    itemName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { itemName: "Nintento Switch 2", quantity: 2},
    { itemName: "Pro controller", quantity: 5},
    { itemName: "Super Smash Bros", quantity: 3}
]
/**
 * El nombre de las funciones empieza con la primera letra capitalizada
 * Que termine en App indica que es el punto de entrada de la aplicación
 *
*/

export function FirstStepsApp(){
    /**
     * Los atributos que van dentro del componente, como si fueran
     * atributos HTML, son en realidad atributos de la función, como
     * si se la estuvieramos pasando en backend. Por ejemplo:
     * ItemCounter(name) que se traduce como ({ name }: NombreInterfaz)
     *
     * Cuando se recorren arrays de objetos utilizaremos map que nos
     * va a permitir integrar cada objeto dentro de un componente.
     *
     * Cada componente exige de un key único, que puede ser por ejemplo
     * en este caso el nombre del item
     */
    return (
        <>
            <h1>Carrito de la compra</h1>
            {itemsInCart.map(({ itemName, quantity }: ItemInCart) => (
                <ItemCounter key={itemName} productName={itemName} quantity={quantity} />
            ))}
            {/* <ItemCounter productName="Nintento Switch 2" quantity={2} />
            <ItemCounter productName="Pro Controller" quantity={5} />
            <ItemCounter productName="Super Smash Bros" quantity={3} /> */}
        </>
    )
}