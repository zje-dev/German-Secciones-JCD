function promedio (students) {
    if (!isNaN(students)) {
        for (let i = 0; i < students; i++) {
            let note1 = parseFloat(prompt("Inserte la primera nota del estudiante "+(i+1)))
            let note2 = parseFloat(prompt("Inserte la segunda nota del estudiante "+(i+1)))
            let note3 = parseFloat(prompt("Inserte la tercera nota del estudiante "+(i+1)))
            if (!isNaN(note1) && !isNaN(note2) && !isNaN(note3)) {
                console.log("Promedio del estudiante"+(i+1)+": "+(note1+note2+note3)/3)
            } else {
                console.log("Uno de los valores insertados no es un número")
            }
        }
    } else {
        console.log("El valor insertado no es un número")
    }
}

let n_estudiantes = parseInt(prompt("Inserte la cantidad de estudiantes"))
promedio(n_estudiantes)