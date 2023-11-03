const pi = 3.1416//Math.pi
let radio = parseFloat(prompt("Inserte el radio"))
if (!isNaN(radio)) {
    let area = pi * (radio ** 2)
    let perimetro = pi * (radio * 2)
    console.log("El area es: ", area)
    console.log("El perimetro es: ", perimetro)
} else {
    alert("El radio debe ser un número")
}