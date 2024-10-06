// Solicitar al usuario un número
let numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));

// Usar un ciclo for para generar la tabla del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
