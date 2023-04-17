let fA = () => console.log("Algo");

fA();

function operation(fn, a, b) {
    console.log("Se hace algo");
    console.log(fn(a, b));
}

operation((a, b) => a * b, 5, 5);

operation((a, b) => {
    const c = a + b;
    return c * 2;
}, 1, 2)