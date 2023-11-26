//alert()

let tasasDeCambio = JSON.parse(localStorage.getItem('tasasDeCambio')) ||{
    Dolares: 1100,    
    Euros: 932, 
    Libras: 1275, 
    Yenes: 2.33,  
    Bitcoins: 13347160
};

const monedas = ['Dolares', 'Euros', 'Libras', 'Yenes', 'Bitcoins']
let continuar = true;

let pesos = document.getElementById("cantidad").value;
let moneda = document.getElementById("moneda").value;

function convertir() {
    const cantidad = document.getElementById('cantidad').value;
    const moneda = document.getElementById('moneda').value;
    if (tasasDeCambio.hasOwnProperty(moneda)) {
        const resultado = cantidad / tasasDeCambio[moneda];
        const mensaje = 'El resultado de la conversión es: ' + resultado.toFixed(8) + ' ' + moneda.toLowerCase();
        document.getElementById('resultado').innerText = mensaje;
    }}

function guardarTasasDeCambio() {
    localStorage.setItem('tasasDeCambio', JSON.stringify(tasasDeCambio));
}

document.getElementById('convertirBtn').addEventListener('click', convertir);
