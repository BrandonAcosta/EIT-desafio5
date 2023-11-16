
console.log("** EJERCICIO 2: **");

const cats = 9;
const steps = 5;
let footPrints = "";
for (let i = 1; i <= cats; i++) {
    for (let x = 0; x < steps; x++) {
        footPrints = footPrints+"🐾"
    }
    console.log(`Gato #${i}:🐈 ${footPrints}`);
    footPrints = "";
}