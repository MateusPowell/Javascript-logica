console.log("=== Calcular Entrega ===")

function calcular () {
    const kmCD = 10;
    const tanque = 40;
    const ciclo = 12;
    const gas = 5.50;
    let kmtotal = null;
    let totcust = null;
    console.log(kmCD);

    const distancia = document.getElementById("Distancia");
    const encomendas = document.getElementById("Encomendas");
    console.log(encomendas.value, distancia.value);

    kmtotal = (encomendas.value * distancia.value) + kmCD;
    console.log(kmtotal);

    totcust = (kmtotal/ciclo) * gas
    console.log(totcust);
    
    totcust = parseFloat(totcust).toFixed(2);
    document.getElementById("resultado").value = totcust + " Reais";
}
    