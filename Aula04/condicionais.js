console.log("=== Condicionais ===")

// Entrada

const aluno = prompt("Digite o nome do Aluno:")
const nota = prompt("Nota do aluno:")
console.log(aluno, nota);

// Processamento

let resp = null;

/* Exemplo 1
if (nota >= 6) { 
    resp= "Aprovado!";    
}

if (6 > nota && nota >=4) {
    resp ="Recuperação!";
} 

if (nota <4) {
    resp= "Reprovado!";
}
*/

// Exemplo 2
/*
if (nota >= 6) {
    resp= "Aprovado!";
} else { if (nota>=4) {
    resp= "Recuperação!";
} else {
    resp= "Reprovado!";
}
}
*/

// Exemplo 3
/*
if (nota>=6) {
    resp= "Aprovado!";
} else if (nota>=4) {
    resp= "Recuperação!";
} else {
    resp= "Reprovado!";
}
*/

// Exemplo 4 SWITCH / CASE


console.log(resp);

//saída
document.write(`
Aluno: ${aluno}
Nota: ${nota}
Situação: ${resp}`);