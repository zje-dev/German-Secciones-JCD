let age = parseInt(prompt("Inserte la edad del usuario"))
if (!isNaN(age)) {
    if (age >= 18) {
        console.log("El usuario es mayor de edad")
    } else {
        console.log("El usuario NO es mayor de edad")
    }
} else {
    console.log("La edad debe ser un número")
}