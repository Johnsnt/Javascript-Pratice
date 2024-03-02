/*
Dolar:
info: A contação está referente à data 9/02/2024 
valor Real: 0,20 valor Dola: 4,97

iene:A cotação está referente à data 02/03/2024
Real: 0,033 - 1 yen
Iene: 30,31 - 1 real

*/

import pergunta from 'readline-sync';
import { conversorReais, conversorDolar } from './funcoes.js';



const moeda = pergunta.question(`

a)Real para Dolar
b)Dolar para Real

Qual moeda você quer converter: `);

switch (moeda) {
    case "a":
        const valorReal = pergunta.question('Quantidade de Reais: ');
        conversorReais(valorReal);
        break;
    case "b":
        const valorDolar = pergunta.question("Quantidade de dólares: ");
        conversorDolar(valorDolar);
}


