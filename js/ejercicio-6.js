
const precioProducto = parseFloat(prompt("Ingrese el valor del producto en dólares:"));

const precioDolar = 1130; 
const ivaPorcentaje = 0.21; 


if (!isNaN(precioProducto) && precioProducto > 0) {
    
    const precioEnPesos = precioProducto * precioDolar;

    
    const iva = precioEnPesos * ivaPorcentaje;

    
    const precioTotal = precioEnPesos + iva;

    
    alert(`El valor total del producto con IVA incluido es: $${precioTotal.toFixed(2)}`);
} else {
    
    alert("Por favor, ingrese un precio válido.");
}

//el  &&  son operadores booleanos