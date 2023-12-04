function sum(number) {
    if (!isNaN(number)) {
        var restult = 0
        for (let i = 1; i <= number; i++) {
            restult += i
        }
        console.log("Resultado: "+restult)
    } else {
        console.log("El valor insertado no es un número")
    }
}

let number_input = parseInt(prompt("Inserte un numero"))
sum(number_input)