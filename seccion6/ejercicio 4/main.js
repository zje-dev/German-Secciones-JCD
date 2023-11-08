let number = parseInt(prompt("Inserte un numero"))
if (!isNaN(number)) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            console.log(i+" es impar")
        }
    }
}