var arreglo1 = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
var arreglo2 = [["J", "K", "L"], ["M", "N", "O"], ["P", "Q", "R"]]
var intercambiable
for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo1[0].length; j++) {
        intercambiable = arreglo1[i][j]
        arreglo1[i][j] = arreglo2[i][j]
        arreglo2[i][j] = intercambiable
    }
}
console.log("Intercambio")
console.log(arreglo1)
console.log(arreglo2)