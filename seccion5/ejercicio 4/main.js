function factorial (number) {
    if (!isNaN(number)) {
        let factor = 1
        for (let i = 1; i <= number; i++) {
            factor *= i
        }
        console.log("El factorial es "+factor)
    } else {
        console.log("El valor ingresado no es un número")
    }
}

let number_input = parseInt(prompt("Inserte un numero"))
factorial(number_input)