//Usé var en vez de let para evitar algún problema con el scope
var monto=parseFloat(prompt("Inserte el monto del prestamo"))
var plazo=parseInt(prompt("Inserte el plazo en meses"))
var cuota=monto/plazo
for (let c=0;c<plazo;c++) {
    console.log("Cuota de mes ",c," ",cuota)
    cuota += (cuota/100)*2.7
}