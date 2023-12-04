function main () {
    var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    console.log("Iterar por while")
    var i = 0
    var j = 0
    while (i < array.length) {
        while (j < array[0].length) {
            console.log(array[i][j])
            j++
        }
        i++
        j = 0
    }
    console.log("Iterar por for")
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[0].length; j++) {
            console.log(array[i][j])
        }
    }
    console.log("+1")
    var arraycopy = array
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[0].length; j++) {
            arraycopy[i][j] = array[i][j] + 1
        }
    }
    console.log(arraycopy)
    console.log("Promedio")
    var result = 0
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[0].length; j++) {
            result += array[i][j]
        }
    }
    console.log(r/(array.length*array[0].length))
}

main()