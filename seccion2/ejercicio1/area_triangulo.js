//Cree un programa que tome la base y la 
//altura de un triángulo e imprima su área.
/*
Programa que muestra el area de un triangulo
dadas la base y la altura
Autor: German Angarita
Fecha: Octubre 19 de 2023
*/
/*
Análisis:
1. Datos de entrada
base y altura
2. Proceso
Aplicar formula base * altura / 2
3. Salida
Mostrar área obtenida
*/
let base = parseFloat(prompt("Ingrese base"));
let altura = parseFloat(prompt("Ingrese altura"));
let area = base * altura / 2;
console.log("Area en U cuadradas: ", area);

