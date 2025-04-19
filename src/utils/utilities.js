export const formatoMoneda = (moneda, valor)=>{
    const currencyFormat = new Intl.NumberFormat('es-AR', {style: 'currency', minimumFractionDigits: 2, currency: moneda});
    return currencyFormat.format(valor);
}
