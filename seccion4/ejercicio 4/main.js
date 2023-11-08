let number = parseFloat(prompt("Inserte un valor entre 1 y 15"))
if (!isNaN(number)) {
    if (number < 1 || number > 15) {
        console.log("El valor no está entre 1 y 15")
    } else {
        let divisibleOthers = false
        for (let i = 2; i < number; i++) {
            if (Number.isInteger(number / i))
                divisibleOthers = true
        }
        if (!divisibleOthers && Number.isInteger(number / 1) && Number.isInteger(number / number)) {
            console.log("Es un numero primo")
        } else {
            console.log("No es un numero primo")
        }
    }
} else {
    console.log("El valor debe ser numerico")
}