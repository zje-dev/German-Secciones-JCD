function main () {
    var array = [1, 2, 3, 4, 5, 6]
    console.log("Iterar con while")
    var i = 0
    while (i < array.length) {
        console.log(array[i])
        i++
    }
    console.log("Iterar con for")
    for (i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    console.log("+1")
    for (i = 0; i < array.length; i++) {
        console.log(array[i] + 1)
    }
    //Copia +1
    var sumarray = []
    for (i = 0; i < array.length; i++) {
        sumarray[i] = array[i] + 1
    }
    console.log(sumarray)
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    } 
    console.log("Promedio del primer arreglo: "+sum/array.length)
}

main()