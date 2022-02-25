console.log("=== Array  ===")

// Antipadrão

/* 
const carro1 = "Gol";
const carro2 = "Corsa";
const carro3 = "Fox";
*/

// array literal
const carros = ["Gol", "Corsa", "Fox"];

// contexto.comando();
carros.push("Corolla"); // add no final do array
carros.unshift("Marea"); // add item no começo
carros.splice(1,1) // remove item na posicao X
carros.splice(0, 1, "BMW"); // substitui o item no local X
carros.splice(2, 0, "Fusca"); // adiciona o item na posição X


console.log(carros);
console.log(carros.length);