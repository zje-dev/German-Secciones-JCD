//Usé var en vez de let para evitar algún problema con el scope
var amount=parseFloat(prompt("Inserte el monto del prestamo"))
var timelimit=parseInt(prompt("Inserte el plazo en meses"))
if (!isNaN(amount) && !isNaN(timelimit)) {
    var fee=amount/timelimit
    for (let c=0;c<timelimit;c++) {
        console.log("La cuota de mes ",c," es ",fee)
        fee += (fee/100)*2.7
    }
} else {
    alert("Uno de los valores ingresados no es número")
}