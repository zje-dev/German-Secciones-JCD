function menor (array) {
    var value = array[0];
    for (let i = 0; i < array.length; i++) {
        if (value > array[i])
            value = array[i]
    }
    return value
}
console.log(menor([3, 5, 6, 10, -1, 23, 2, 3]))