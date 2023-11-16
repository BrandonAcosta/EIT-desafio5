
console.log("** EJERCICIO 3 **");
console.log("Disclaimer: El desarrollador no se hace responsable por posibles fallas con los emoticonos!! 🐈‍⬛");

const quitties = 3;
const furrySteps = 2;
let quittiePrints = "";
for (let i = 1; i <= quitties; i++) {
    for (let x = 0; x < furrySteps; x++) {
        quittiePrints = quittiePrints + "🐾"
    }
    switch (i % 2) {
        case 0:
            console.log(`Gato #${i}:🐈‍⬛ ${quittiePrints}`);
            break;
        case 1:
            console.log(`Gato #${i}:🐈‍ ${quittiePrints}`);
            break;
        default:
            console.log(`Esto es otro Error, tampoco deberias ver esto 😹`);
            break;
    }
    quittiePrints = "";
}