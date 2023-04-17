function sum(a, b) {
    return a + b;
}

let res = sum(1, 2);
console.log(res);

/* Función de primer orden
Es una función que puede almacenarse en una variable y utilizar su valor */
const fSum = sum;
res = fSum(5, 6);
console.log(res);

/* Función de orden superior
Puede recibir en parámetros funciones */
function operation(fn, a, b) {
    console.log("Se hace algo");
    console.log(fn(a, b));
}

operation(sum, 10, 20);