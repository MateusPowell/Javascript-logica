console.log("=== Calcular IMC ===")

function calcular () {
    const alt = document.getElementById("altura").value;
    console.log(alt);
    const peso = document.getElementById("peso").value;
    console.log(peso);

    let result = null;

    result = peso/(alt**2)
    
    if (result<=18.5) {
        valor = "Magreza"
    } else if (result<=24.9){
        valor = "Normal"
    } else if (result <=30){
        valor = "Sobrepeso"
    } else {
        valor = "Obesidade"
    }

    document.getElementById("resultado").value = valor;

    // document.getElementById("resultado").value = parseFloat(result).toFixed(1);

    console.log(result)
}
    