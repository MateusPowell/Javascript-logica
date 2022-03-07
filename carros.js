console.log("=== Carros ===")

const carros = [];
let total = null;

function add() {
    const id = carros.length +1;
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");    
    const preco = document.getElementById("preco");
    const totalprice = document.getElementById("total");
    // processamento

    const carro = {
        id: id, 
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value,
        preco: parseFloat(preco.value),
    };
    
    carros.push(carro);
    console.table(carros);

    //Preço total     

    let total = carros.reduce((total, carro)=> {
        return total + carro.preco;
    }, 0);

    totalprice.innerHTML = `R$ ${total.toFixed(2)}`

    // saida
   
    const lista = document.getElementById("lista");

    lista.innerHTML = carros.map(function(carro) {
        return `<tr>
        <td>${carro.id}</td>
        <td>${carro.modelo}</td>
        <td>${carro.ano}</td>
        <td>${carro.cor}</td>
        <td>${carro.situacao}</td>
        <td>${carro.preco}</td>
        </tr>`;
    }).join("");

     
};
   