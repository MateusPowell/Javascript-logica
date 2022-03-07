console.log("=== Objeto  ===")

// const carro1 = ["Gol", 2010, "vermelho", "usado"];
// const carro2 = ["Fox", 2015, "preto", "zero"];
// const carro3 = ["Uno", 2000, "verde", "usado"];

// console.log(carro1);
// console.log(carro2);
// console.log(carro3);

// objeto literal
const carro = [{
    modelo:"Gol",
    ano: 2010,
    cor: "verde",
    situacao: "usado",
    },
{
    modelo:"Gol",
    ano: 2010,
    cor: "vermelho",
    situacao: "zero",
},
{
    modelo:"Gol",
    ano: 2010,
    cor: "preto",
    situacao: "zero",
}];

console.log(carro);

let usados = carro.filter(function(carro){
    return carro.situacao == "usado"
});

console.table(usados);