function averange() {
    var values = 0
    for (let i = 0; i < 10; i++) {
        values += parseFloat(prompt("Inserte un numero"))
    }
    console.log("El promedio es "+(values/10))
}

averange()