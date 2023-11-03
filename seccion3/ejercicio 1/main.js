let age = parseInt(prompt("Inserte la edad del usuario"))
if (!isNaN(age)) {
    if (age >= 18) {
        alert("El usuario es mayor de edad")
    } else {
        alert("El usuario NO es mayor de edad")
    }
} else {
    alert("La edad debe ser un número")
}