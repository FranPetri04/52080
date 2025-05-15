//GRAMÁTICA
grammar Analizador;

program : instruccion+ ;

instruccion : seleccion ;

seleccion : SEGUN expresion HACER LCURLY (caso)* (caso_defecto)? RCURLY FINSEGUN ;

caso : CASO constante DOBPUNT (sentencia)* ;

caso_defecto : DEFECTO DOBPUNT (sentencia)* ;

sentencia : (salida)+ | terminar ;

salida : IMPRIMIR LPAREN cadena RPAREN SEMI ;

terminar : SALIR SEMI ;

expresion : constante ;

constante : cadena | numero ;

cadena : COMILLA (caracter)* COMILLA ;

numero : INT ;

caracter : ID | INT | SIMB ;


//LEXER
AND : 'and' ;
OR : 'or' ;
NOT : 'not' ;
EQ : '=' ;
COMMA : ',' ;
SEMI : ';' ;
LPAREN : '(' ;
RPAREN : ')' ;
LCURLY : '{' ;
RCURLY : '}' ;

HACER : 'hacer' ;
SEGUN : 'segun' ;
FINSEGUN : 'finsegun' ;
DOBPUNT : ':' ;
CASO : 'caso' ;
DEFECTO : 'defecto' ;
IMPRIMIR : 'imprimir' ;
SALIR : 'salir' ;
COMILLA : '"' ;


SIMB : [.,!¡?] ;
INT : [0-9]+ ;
ID: [a-zA-Z_][a-zA-Z_0-9]* ;
WS: [ \t\n\r\f]+ -> skip ;