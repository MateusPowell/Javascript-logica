console.log("=== Repetição ===")

// var inicial = 1;
// var final = 10;

// while (inicial <= final) {
//     document.write(`${inicial} `);    
//     inicial = inicial + 1;
// }
// document.write("<h3> Números de 50 a 1 </h3><hr>");
// // numero 50 a 1

// var inicial = 50;
// var final = 1;

// while (inicial >= final) {
//     document.write(`${inicial} `);    
//     inicial = inicial - 1;
// }
// document.write("<h3> Números Pares de 0 a 100 </h3><hr>");

// // numeros pares 0 a 100

// var inicial = 0;
// var final = 100;

// while (inicial <= final) {
//     document.write(`${inicial} `);    
//     inicial = inicial + 2;
// }
// document.write("<h3> Números Ímpares de 99 a 1 </h3> <hr>");

// // numeros impares 99 à 1

// var inicial = 99;
// var final = 0;

// while (inicial >= final) {
//     document.write(`${inicial}`);
//     if (inicial > 1) {
//         document.write("-")
//     }  
//     inicial = inicial - 2;
// }
// document.write("<h3> desisto </h3> <hr>");

// programinha
// var x = prompt("Digite um numero:");
// x = parseInt(x);
// console.log(x, typeof x);

// while (x != 0) {   
//     document.write(x, "-");
        
//     console.log(x);
   
//     x = prompt("Digite um numero:");
// }

// coisa linda lul

// let loop = true;
// let num;
// while (loop) {
//     num = prompt("digite numeros");
//     console.log (num);

//     if (num ==0) {
//         loop = false;
//         console.log("Fim!");
//     }
// }
// let aste = prompt("digite quantos asteriscos se quer")
// for (let index = 0; index < aste; index++) {
//     document.write("*");55
// }
// let y = prompt("Quantas linhas?");
// let cont = 1
// for (let index = 0; index < y; index++) {
//     for (let index = 0; index < cont; index++) {
//         document.write("*");
//     }
//     document.write("<br>");
//     cont ++
// }

// Desafio

// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *
let esp = 0
let lin = prompt("quantas linhas?:")
if (lin >= 40) {
    lin = 40;
    document.write("maximo 40 linhas<br>");
}
let fim = lin-1
let pir = fim+fim-1
for (let index = 0; index < lin; index++) {
    for (let index = 0; index < esp; index++) {
        document.write("&ensp;");
    }
    document.write("*");
    if (fim != esp) {
        for (let index = 0; index < pir; index++) {
            document.write("=");
        }   
        document.write("*<br>");
        esp++;
        pir = pir-2;
    }
    
}


// &nbsp