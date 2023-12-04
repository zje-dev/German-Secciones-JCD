let number = parseInt(prompt("Inserte un numero"))
function isPair (number) {
    if (!isNaN(number)) {
        for (let i = 1; i <= number; i++) {
            if (i % 2 != 0) {
                console.log(i+" es impar")
            }
        }
    }
}

let number_input = parseInt(prompt("Inserte un numero"))
isPair(number_input)