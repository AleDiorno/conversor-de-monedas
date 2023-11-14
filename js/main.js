//alert()

const tasasDeCambio = {
    Dolar: 1100,    
    Euro: 932, 
    Libra: 1275, 
    Yen: 2.33,  
    Bitcoin: 10865262
};
const monedas = ['Dolar', 'Euro', 'Libras', 'Yenes', 'Bitcoin']
let continuar = true;

while (continuar) {
let pesos = prompt("Ingrese cantidad de Pesos $ a convertir");
let moneda = prompt("A que moneda quiere intercambiar sus pesos:" + monedas.join(" ,"));

if(moneda === "Dolar"){
    alert(pesos + " pesos son " + Number(pesos)/tasasDeCambio.Dolar + " dolares");
}else if(moneda === "Euro"){
    alert(pesos + " pesos son " + Number(pesos)/tasasDeCambio.Euro + " euros");
}else if (moneda === "Libras"){
    alert(pesos + " pesos son " + Number(pesos)/tasasDeCambio.Libra + " libras");
}else if (moneda === "Yenes"){
    alert(pesos + " pesos son " + Number(pesos)/tasasDeCambio.Yen + " yenes");
}else if (moneda === "Bitcoin"){
    alert(pesos + " pesos son " + Number(pesos)/tasasDeCambio.Bitcoin + " bitcoins");
}else("Moneda no aceptada")

continuar = confirm("¿Quieres realizar otra conversion?")
}
