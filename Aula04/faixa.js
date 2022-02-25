console.log("=== Faixa Etária ===")

function etaria() {

    const numero = document.getElementById("idade").value;
    console.log(numero) 
    let et = null
    if (numero>=65) {
        et = "Sou Idoso";    
    } else if (numero>=18) {
        et = "Sou Adulto";
    } else if (numero>=12) {
        et = "Sou Adolescente";
    } else if (numero>=0) {
        et = "Sou Criança";
    } else {
        et = "Não Válido";
    }
     
    document.getElementById("faixa").value = et;
}
