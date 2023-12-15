//alert()

let tasasDeCambio = JSON.parse(localStorage.getItem('tasasDeCambio')) || {
    Dolares: 1,
    Euros: 1,
    Libras: 1,
    Yenes: 1,
};

const monedas = ['Dolares', 'Euros', 'Libras', 'Yenes', 'Bitcoins'];
let continuar = true;

document.getElementById('convertirBtn').addEventListener('click', convertir);
async function convertir() {
    const cantidad = document.getElementById('cantidad').value;
    const moneda = document.getElementById('moneda').value;
    const apiKey = 'db15195e48059964474fd946';
    const apiUrl = `https://v6.exchangerate-api.com/v6/db15195e48059964474fd946/latest/ARS`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result === 'success') {
            tasasDeCambio.Dolares = data.conversion_rates.USD;
            tasasDeCambio.Euros = data.conversion_rates.EUR;
            tasasDeCambio.Libras = data.conversion_rates.GBP;
            tasasDeCambio.Yenes = data.conversion_rates.JPY;
            const tasaCambio = tasasDeCambio[moneda];
            const resultado = cantidad * tasaCambio;
            const resultadoFormateado = numeral(resultado).format('0,0.00');
            const mensaje = "El resultado de la conversión es: " + resultadoFormateado + " " + moneda.toLowerCase();
            document.getElementById('resultado').innerText = mensaje;
        } else {
            console.error('Error al obtener tasas de cambio.');
        }
    } catch (error) {
        console.error('Error en la solicitud a la API:', error);
    }}

function guardarTasasDeCambio() {
    localStorage.setItem('tasasDeCambio', JSON.stringify(tasasDeCambio));
}
