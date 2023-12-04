function iterations (number) {
    if (!isNaN(number)) {
        for (let i = 1; i <= number; i++) {
            console.log(i)
        }
    } else {
        console.log("El valor ingresado no es un número")
    }
}

let number_input = parseInt(prompt("Inserte un numero"))
iterations(number_input)