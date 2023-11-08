let age = (parseInt(prompt("Insertar edad")))
let years = (parseInt(prompt("Insertar años")))
if (!isNaN(age) && !isNaN(years)) {
    console.log("La edad del usuario será "+(age+years)+" en "+(years)+" años.")
} else {
    console.log("Uno de los valores ingresados no es número")
}