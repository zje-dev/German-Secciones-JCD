const pi = 3.1416//Math.pi
let ratio = parseFloat(prompt("Inserte el radio"))
if (!isNaN(ratio)) {
    let area = pi * (ratio ** 2)
    let perimeter = pi * (ratio * 2)
    console.log("El area es: ", area)
    console.log("El perimetro es: ", perimeter)
} else {
    console.log("El radio debe ser un número")
}