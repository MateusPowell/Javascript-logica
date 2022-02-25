console.log("=== CALCULADORA ===")

function calcular() {
    const nu1 = parseInt(document.getElementById("n1").value);
    const nu2 = parseInt(document.getElementById("n2").value);
    
    const resultado = nu1+nu2;

    document.getElementById("result").value=resultado;

    return console.log(resultado);   
}