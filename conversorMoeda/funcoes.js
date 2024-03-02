/**
 * @description Funções relacionadas com a conversão de moedas. 
 * É esperado o valor em string devido à entrada de dados
 * 
 * @param {string} quantidade
 */

function conversorReais(quantidade) {
    const taxaCambioDolar = 0.20;

    let valor = Number(quantidade);
    let valorConvertido = valor * taxaCambioDolar;
    return console.log(`R$${valor.toFixed(2)} convertidos para dólar corresponde a USD ${valorConvertido.toFixed(2)} `);
};

function conversorDolar(qtd) {
    const taxaCambioDolar = 4.97;

    let valor = Number(qtd);
    let valorConvertido = valor * taxaCambioDolar;
    return console.log(`U$${valor.toFixed(2)} convertidos para Reais corresponde a R$ ${valorConvertido.toFixed(2)}`);

}



export {
    conversorReais,
    conversorDolar
};