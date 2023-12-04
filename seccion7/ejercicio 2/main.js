function straight_backwards_array() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 9]
    for (let i = 0; i < 9; i++) {
        console.log(array[i])
    }
    array.reverse()
    for (let i = 0; i < 9; i++) { //Una alternative sería definir i como 9 y reemplazar el i++ por i--, para que así empiece por el final
        console.log(array[i])
    }
}
straight_backwards_array()