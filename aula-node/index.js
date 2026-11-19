// Ponto de entrada do projeto (rode com: node index.js ou npm start)

// 1. Biblioteca externa instalada pelo npm (deixa o terminal colorido)
require('colors');

// 2. Módulo nativo do Node: fs (File System), impossível de usar no navegador
const fs = require('fs');

// 3. Nosso próprio módulo (o ./ indica que é um arquivo local)
const matematica = require('./matematica');

// ----- Calculadora modular -----
const a = 10;
const b = 5;

console.log('=== Calculadora Modular ==='.bold.cyan);
console.log(`${a} + ${b} = ${matematica.somar(a, b)}`.green);
console.log(`${a} - ${b} = ${matematica.subtrair(a, b)}`.yellow);
console.log(`${a} * ${b} = ${matematica.multiplicar(a, b)}`.magenta);
console.log(`${a} / ${b} = ${matematica.dividir(a, b)}`.blue);
console.log(`${a} / 0 = ${matematica.dividir(a, 0)}`.red);

// ----- Manipulando arquivos com fs -----
const conteudo =
  `Resultado da soma: ${matematica.somar(a, b)}\n` +
  `Arquivo gerado em: ${new Date().toLocaleString('pt-BR')}\n`;

// Cria (ou sobrescreve) o arquivo
fs.writeFileSync('resultado.txt', conteudo);
console.log('\nArquivo resultado.txt criado com sucesso!'.bold.green);

// Adiciona uma linha no final do arquivo
fs.appendFileSync('resultado.txt', 'Linha adicionada com appendFileSync.\n');

// Lê o arquivo de volta
const lido = fs.readFileSync('resultado.txt', 'utf-8');
console.log('\nConteúdo do arquivo:'.underline);
console.log(lido);
