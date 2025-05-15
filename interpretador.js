import antlr4 from 'antlr4';
import fs from 'fs';
import Table from 'cli-table3';
import { CharStreams, CommonTokenStream } from 'antlr4';

import AnalizadorLexer from './generated/AnalizadorLexer.js';
import AnalizadorParser from './generated/AnalizadorParser.js';
import AnalizadorListener from './generated/AnalizadorListener.js';

//PUNTO 1: Analisis lexico y sintactico

// Listener de errores personalizado
class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor(errorArray) {
    super();
    this.errors = errorArray;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    this.errors.push(`(Línea ${line}:${column}) Error: ${msg}`);
  }
}

// Leer archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');
const chars = CharStreams.fromString(input);
const lexer = new AnalizadorLexer(chars);
const tokens = new CommonTokenStream(lexer);

// Capturar errores con mi CustomErrorListener
const lexingErrors = [];
const syntaxErrors = [];

const lexerErrorListener = new CustomErrorListener(lexingErrors);
const parserErrorListener = new CustomErrorListener(syntaxErrors);

lexer.removeErrorListeners();
lexer.addErrorListener(lexerErrorListener);

const parser = new AnalizadorParser(tokens);
parser.buildParseTrees = true;

parser.removeErrorListeners();
parser.addErrorListener(parserErrorListener);

// Ejecutar análisis sintáctico
const tree = parser.program();

// 🧾 Resultado final
if (lexingErrors.length === 0 && syntaxErrors.length === 0) {
  console.log('\n✅ Entrada correcta: no se encontraron errores léxicos ni sintácticos.\n');
} else {
  console.log('\n❌ Se encontraron errores en la entrada:\n');
  lexingErrors.forEach(e => console.error(e));
  syntaxErrors.forEach(e => console.error(e));
}

// PUNTO 2: Tabla de lexemas-tokens
console.log('\n Tabla de Lexemas - Tokens\n');

console.log('+------------------------+------------------------+');
console.log('| Lexema                 | Token                  |');
console.log('+------------------------+------------------------+');

const tokenTypeMap = {};
AnalizadorLexer.symbolicNames.forEach((name, index) => {
  if (name) tokenTypeMap[index] = name;
});

tokens.fill();
tokens.tokens.forEach(token => {
  if (token.type !== -1) {
    const tokenName = AnalizadorLexer.symbolicNames[token.type] || `Token_${token.type}`;
    const lexema = token.text.replace(/\n/g, '\\n').replace(/\t/g, '\\t');
    const lexemaCol = lexema.padEnd(23).slice(0, 23);
    const tokenCol = tokenName.padEnd(23).slice(0, 23);
    console.log(`| ${lexemaCol} | ${tokenCol} |`);
  }
});

console.log('+------------------------+------------------------+');

// PUNTO 3: Árbol de análisis sintáctico
function imprimirArbol(node, parser, nivel = 0) {
  const indent = '  '.repeat(nivel);
  const ruleNames = parser.ruleNames;

  if (node.children && node.children.length > 0) {
    const ruleName = ruleNames[node.ruleIndex];
    console.log(`${indent}${ruleName}`);
    node.children.forEach(child => imprimirArbol(child, parser, nivel + 1));
  } else {
    const text = node.getText().replace(/\n/g, "\\n");
    console.log(`${indent}"${text}"`);
  }
}

console.log('\n Árbol de Análisis Sintáctico:\n');
imprimirArbol(tree, parser);



