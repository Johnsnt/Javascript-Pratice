/*
info: A contação está referente à data 9/02/2024 
valor Real: 0,20
*/

import pergunta from 'readline-sync'
import { conversorReais } from './funcoes.js'



const moeda = pergunta.question(`
a)Real para Dolar
Qual moeda você quer converter: `)

switch (moeda) {
    case "a":
        const valor = pergunta.question('Quantidade de Reais: ')
        conversorReais(valor)
        break;
}