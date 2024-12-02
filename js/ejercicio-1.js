const base = +prompt("Colocar base");
const altura = +prompt("Colocar altura");

if (isNaN(base) || isNaN(altura)) {
  console.log("Por favor ingresa valores numéricos válidos.");
} else {
  console.log("El área del rectángulo es: " + (base * altura));
}
