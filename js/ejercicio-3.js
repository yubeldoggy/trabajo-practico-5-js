const numero1= +prompt("ingresar numero")
const numero2= +prompt("ingresar numero")
const operacion = prompt("Ingresa la operación (+, -, *, /):");

if(operacion ==="+"){
    resultado=numero1 + numero2;

}else if(operacion ==="-"){
    resultado=numero1 - numero2;

} else if (operacion ==="*"){
    resultado=numero1 * numero2;

} else if(operacion ==="/"){

    if (num2 === 0) {
        resultado = "No se puede dividir por cero";
    } else {
        resultado = num1 / num2;
    }

}

alert( `el resultado es ${resultado}`);