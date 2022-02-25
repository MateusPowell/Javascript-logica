console.log("=== Testador ===")

function testar() { 
    const n1 = document.getElementById("n1").value;
    console.log(n1);
    const n2 = (document.getElementById("n2").value);
    console.log(n2);
    const compa = (document.getElementById("comp"));
    console.log(compa.value);

    let result = null;

    switch (compa.value) {
        case "maiorque":
            result = n1>n2;  
        console.log(result);

            break;
        case "menorque":
            result = n1<n2;  
        console.log(result);
           
            break;  
        case "igual":
            result = n1==n2;  
        console.log(result);
            break;            
        default: 
            break;
    }
    document.getElementById("teste").value=result;      
}