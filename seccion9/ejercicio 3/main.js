function cuadrados(arreglo) {
    let r = 0
    for (let i = 0; i < arreglo.length; i++) {
        r += arreglo[i] ** 2
    }
    return r
}
console.log(cuadrados([23, 5, 6, 9, 28]))