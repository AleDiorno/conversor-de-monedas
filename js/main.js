//alert()

const tasaDolar = 1100
const tasaEuro = 932
const tasaLibra =1275
const tasaYen= 2.33
const tasaBitcoin= 10865262
let continuar = true;

while (continuar) {
let pesos = prompt("Ingrese cantidad de Pesos $ a convertir");
let moneda = prompt("A que moneda quiere intercambiar sus pesos: 1) Dolares , 2) Euros, 3) Libras, 4) Yenes, 5) Bitcoins")

if(moneda === "1"){
    console.log(pesos + " pesos son " + Number(pesos)/tasaDolar + " dolares");
}else if(moneda === "2"){
    console.log(pesos + " pesos son " + Number(pesos)/tasaEuro + " euros");
}else if (moneda === "3"){
    console.log(pesos + " pesos son " + Number(pesos)/tasaLibra + " libras");
}else if (moneda === "4"){
    console.log(pesos + " pesos son " + Number(pesos)/tasaYen + " yenes");
}else if (moneda === "5"){
    console.log(pesos + " pesos son " + Number(pesos)/tasaBitcoin + " bitcoins");
}else("Moneda no aceptada")

continuar = confirm("¿Quieres realizar otra conversion?")
}


