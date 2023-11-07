let students = parseInt(prompt("Inserte la cantidad de estudiantes"))
if (!isNaN(students)) {
    for (let i = 0; i < students; i++) {
        let note1 = parseFloat(prompt("Inserte la primera nota del estudiante "+(i+1)))
        let note2 = parseFloat(prompt("Inserte la segunda nota del estudiante "+(i+1)))
        let note3 = parseFloat(prompt("Inserte la tercera nota del estudiante "+(i+1)))
        if (!isNaN(note1) && !isNaN(note2) && !isNaN(note3)) {
            alert("Promedio: "+(note1+note2+note3)/3)
        } else {
            alert("Uno de los valores insertados no es un número")
        }
    }
} else {
    alert("El valor insertado no es un número")
}