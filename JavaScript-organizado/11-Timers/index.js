/** Aula 01 */
setTimeout( () => {
    console.log("new time")
}, 4000);

console.log("outra func")

/** Aula 02 */

const time = setTimeout( () => {
    console.log("new time")
}, 4000);

console.log("outra func")

clearTimeout(time)

/** Aula 03 */

setInterval(() => console.log("time init"), 1000);

/** Aula 04 */

const hora = setInterval(() => console.log("time init"), 1000);
setTimeout( () => {
    clearInterval(hora)
}, 3000)

