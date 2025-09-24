
/**
 * Las promesas reciben una función de flecha con 2 parámetros
 * Resolve que resuelve a éxito se recoge posteriormente con el then
 * Reject que resuelve a error se recoge posteriormente con el catch
 * Finally en las promesas se ejecuta independientemente del resultado.
 */
const myPromise = new Promise<number>((resolve, reject) => {

    setTimeout( () => {
        //! Quiero mi dinero de regreso
        // resolve(100);
        reject('Mi amigo se perdió')
    }, 2000) // 2 Segundos

})

// El my money is back es lo que se obtiene dentro del resolve
myPromise
    .then((myMoneyIsBack) => {
        console.log(`Tengo mi dinero ${myMoneyIsBack}`)
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(() => {
        console.log("A seguir con mi vida");
    })