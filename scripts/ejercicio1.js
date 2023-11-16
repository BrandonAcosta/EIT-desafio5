
console.log("** EJERCICIO 1: **");
let catQuantity = 10;
for (let i = 1; i <= catQuantity; i++) {
    switch (i % 3) {
        case 1:
            console.log(`Gato #${i}:😺`);
            break;
        case 2:
            console.log(`Gato #${i}:😸`);
            break;
        case 0:
            console.log(`Gato #${i}:😹`);
            break;
        default:
            console.log(`Esto es un Error, no deberias ver esto 😹`);
            break;
    }
    
}