// 1. Faça um Programa que mostre a mensagem "Olá mundo" na tela.
alert('Olá mundo')

// 2. Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let numero = prompt('Digite um número.')
alert(`O número informado foi ${numero}`)

// 3. Faça um Programa que peça dois números e imprima a soma.
let num1 = parseInt(prompt('Digite um valor.'))
let num2 = parseInt(prompt('Digite outro valor.'))
let soma = (num1)+(num2)
alert(`${soma}`)

// 4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const bim1 = parseInt(prompt('Digite sua primeira nota bimestral.'))
const bim2 = parseInt(prompt('Digite sua segunda nota bimestral.'))
const bim3 = parseInt(prompt('Digite sua terceira nota bimestral.'))
const bim4 = parseInt(prompt('Digite sua quarta nota bimestral.'))
let notas = parseInt (bim1)+(bim2)+(bim3)+(bim4)
let resultado = (notas)/4
alert(`Sua média bimestral foi: ${resultado}`)

// 5- Faça um Programa que converta metros para centímetros.
const metro = parseInt(prompt('Digite o comprimento em metro.'))
let centimetro = parseInt (metro)*100
alert(`O valor em centímetros é: ${metro1}`)

// 6- Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
const raio = parseInt(prompt('Digite o raio do círculo.'))
let area = 3.14*((raio)*2)
alert(`A área do círculo é: ${area}`)

// 7- Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const base = parseInt(prompt('Digite o valor da base.'))
const altura = parseInt(prompt('Digite o valor da altura.'))
let quadrado = (base)*(altura)
let quadrado2 = (quadrado)*2
alert(`O dobro da área do quadrado é: ${quadrado2}`)

// 8- Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const hora = parseInt(prompt('Quanto vocé ganha por hora?'))
const trabalho = parseInt(prompt('Qual seu número de horas trabalhadas no mês?'))
let salario = (hora)*(trabalho)
alert(`você recebe um total de R$${salario} por mês`)

// 9- Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
const fahrenheint = parseInt(prompt('Digite a temperatura em fahrenheit.'))
let celsius = ((fahrenheint)-32)*5/9
alert(`A temperatura em graus celsius é: ${celsius}`)

// 10- Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
const celsius2 = parseInt(prompt('Digite a temperatura em graus celsius.'))
let farhrenheint2 = ((celsius2)*9/5)+32
alert(`A temperatura em fahrenheit é: ${farhrenheint2}`)

// 11- Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.
const n1 = parseInt(prompt('Escreva um número inteiro.'))
const n2 = parseInt(prompt('Escreveva outro número inteiro.'))
const n3 = parseInt(prompt('Escreva um número real.'))
const produto = (n1*2) * (n2/2)
const soma1 = (n1*3) + n3
const cubo = n3**3
alert(`O produto do dobro com o primeiro com metade do segundo: ${produto}`)
alert(`A soma do triplo do primeiro com o terceiro: ${soma1}`)
alert(`O terceiro elevado ao cubo: ${cubo}`)

// 12- Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
const altura1 = parseFloat(prompt('Escreva sua altura.'))
const pesoideal = parseInt((72.7*altura1)-58)
alert(`Seu peso ideal é: ${pesoideal}kg.`) 

// 13- Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7
const altura2 = parseFloat(prompt('Escreva sua altura'))
const homem = parseInt((72.7*altura)-58)
const mulher = parseInt((62.1*altura)-44.7)
alert(`Peso ideal para homens: ${homem}kg.`)
alert(`Peso ideal para mulheres: ${mulher}kg.`)

// 14- João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
const pesoDePeixes = parseInt(prompt('Digite o peso de peixes pescados:'))
const excesso = pe-50
const multa = excesso*4
alert(`Você pagará uma multa de: R$${multa}`)

// 15- Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// salário bruto.
// quanto pagou ao INSS.
// quando pagou para o sindicato.
// o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
const ganhoPorHora = parseFloat(prompt("Quanto você ganha pro hora: "));
const horasDeTrabalho = parseFloat(prompt("Quantas horas você trabalhou no mes: "));
const salarioBruto = ganhoPorHora * horasDeTrabalho;
alert(`O valor bruto e: ${salarioBruto}`)
const inss = (8 / 100)*salarioBruto;
const sindicato = ( 5 / 100)*salarioBruto;
const sobra  = ((inss + sindicato)-salarioBruto) ;
alert(`O valor descontado pelo INSS é: ${inss}`)
alert(`O valor descontado pelo Sindicato é: ${sindicato}`)
alert(`O salário líquido é: ${sobra}`)
