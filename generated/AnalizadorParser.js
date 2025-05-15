// Generated from c:/Users/Usuario/Desktop/Franco/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,23,103,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,2,1,2,1,2,1,2,1,2,5,2,39,8,2,10,2,
12,2,42,9,2,1,2,3,2,45,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,54,8,3,10,3,12,
3,57,9,3,1,4,1,4,1,4,5,4,62,8,4,10,4,12,4,65,9,4,1,5,4,5,68,8,5,11,5,12,
5,69,1,5,3,5,73,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,
3,9,88,8,9,1,10,1,10,5,10,92,8,10,10,10,12,10,95,9,10,1,10,1,10,1,11,1,11,
1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,1,1,0,20,22,98,
0,27,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,49,1,0,0,0,8,58,1,0,0,0,10,72,1,
0,0,0,12,74,1,0,0,0,14,80,1,0,0,0,16,83,1,0,0,0,18,87,1,0,0,0,20,89,1,0,
0,0,22,98,1,0,0,0,24,100,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,29,1,0,0,
0,29,27,1,0,0,0,29,30,1,0,0,0,30,1,1,0,0,0,31,32,3,4,2,0,32,3,1,0,0,0,33,
34,5,12,0,0,34,35,3,16,8,0,35,36,5,11,0,0,36,40,5,9,0,0,37,39,3,6,3,0,38,
37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,0,42,40,
1,0,0,0,43,45,3,8,4,0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,47,5,
10,0,0,47,48,5,13,0,0,48,5,1,0,0,0,49,50,5,15,0,0,50,51,3,18,9,0,51,55,5,
14,0,0,52,54,3,10,5,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,
0,0,0,56,7,1,0,0,0,57,55,1,0,0,0,58,59,5,16,0,0,59,63,5,14,0,0,60,62,3,10,
5,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,9,1,0,0,0,
65,63,1,0,0,0,66,68,3,12,6,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,
70,1,0,0,0,70,73,1,0,0,0,71,73,3,14,7,0,72,67,1,0,0,0,72,71,1,0,0,0,73,11,
1,0,0,0,74,75,5,17,0,0,75,76,5,7,0,0,76,77,3,20,10,0,77,78,5,8,0,0,78,79,
5,6,0,0,79,13,1,0,0,0,80,81,5,18,0,0,81,82,5,6,0,0,82,15,1,0,0,0,83,84,3,
18,9,0,84,17,1,0,0,0,85,88,3,20,10,0,86,88,3,22,11,0,87,85,1,0,0,0,87,86,
1,0,0,0,88,19,1,0,0,0,89,93,5,19,0,0,90,92,3,24,12,0,91,90,1,0,0,0,92,95,
1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,0,0,96,97,5,
19,0,0,97,21,1,0,0,0,98,99,5,21,0,0,99,23,1,0,0,0,100,101,7,0,0,0,101,25,
1,0,0,0,9,29,40,44,55,63,69,72,87,93];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'and'", "'or'", "'not'", "'='", "','", 
                            "';'", "'('", "')'", "'{'", "'}'", "'hacer'", 
                            "'segun'", "'finsegun'", "':'", "'caso'", "'defecto'", 
                            "'imprimir'", "'salir'", "'\"'" ];
    static symbolicNames = [ null, "AND", "OR", "NOT", "EQ", "COMMA", "SEMI", 
                             "LPAREN", "RPAREN", "LCURLY", "RCURLY", "HACER", 
                             "SEGUN", "FINSEGUN", "DOBPUNT", "CASO", "DEFECTO", 
                             "IMPRIMIR", "SALIR", "COMILLA", "SIMB", "INT", 
                             "ID", "WS" ];
    static ruleNames = [ "program", "instruccion", "seleccion", "caso", 
                         "caso_defecto", "sentencia", "salida", "terminar", 
                         "expresion", "constante", "cadena", "numero", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.instruccion();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_seleccion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(AnalizadorParser.SEGUN);
	        this.state = 34;
	        this.expresion();
	        this.state = 35;
	        this.match(AnalizadorParser.HACER);
	        this.state = 36;
	        this.match(AnalizadorParser.LCURLY);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 37;
	            this.caso();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 43;
	            this.caso_defecto();
	        }

	        this.state = 46;
	        this.match(AnalizadorParser.RCURLY);
	        this.state = 47;
	        this.match(AnalizadorParser.FINSEGUN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_caso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(AnalizadorParser.CASO);
	        this.state = 50;
	        this.constante();
	        this.state = 51;
	        this.match(AnalizadorParser.DOBPUNT);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17 || _la===18) {
	            this.state = 52;
	            this.sentencia();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso_defecto() {
	    let localctx = new Caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_caso_defecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(AnalizadorParser.DEFECTO);
	        this.state = 59;
	        this.match(AnalizadorParser.DOBPUNT);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17 || _la===18) {
	            this.state = 60;
	            this.sentencia();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_sentencia);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 66;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 69; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(AnalizadorParser.IMPRIMIR);
	        this.state = 75;
	        this.match(AnalizadorParser.LPAREN);
	        this.state = 76;
	        this.cadena();
	        this.state = 77;
	        this.match(AnalizadorParser.RPAREN);
	        this.state = 78;
	        this.match(AnalizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(AnalizadorParser.SALIR);
	        this.state = 81;
	        this.match(AnalizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.constante();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AnalizadorParser.RULE_constante);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.cadena();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.numero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AnalizadorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(AnalizadorParser.COMILLA);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0)) {
	            this.state = 90;
	            this.caracter();
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
	        this.match(AnalizadorParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AnalizadorParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(AnalizadorParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, AnalizadorParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.AND = 1;
AnalizadorParser.OR = 2;
AnalizadorParser.NOT = 3;
AnalizadorParser.EQ = 4;
AnalizadorParser.COMMA = 5;
AnalizadorParser.SEMI = 6;
AnalizadorParser.LPAREN = 7;
AnalizadorParser.RPAREN = 8;
AnalizadorParser.LCURLY = 9;
AnalizadorParser.RCURLY = 10;
AnalizadorParser.HACER = 11;
AnalizadorParser.SEGUN = 12;
AnalizadorParser.FINSEGUN = 13;
AnalizadorParser.DOBPUNT = 14;
AnalizadorParser.CASO = 15;
AnalizadorParser.DEFECTO = 16;
AnalizadorParser.IMPRIMIR = 17;
AnalizadorParser.SALIR = 18;
AnalizadorParser.COMILLA = 19;
AnalizadorParser.SIMB = 20;
AnalizadorParser.INT = 21;
AnalizadorParser.ID = 22;
AnalizadorParser.WS = 23;

AnalizadorParser.RULE_program = 0;
AnalizadorParser.RULE_instruccion = 1;
AnalizadorParser.RULE_seleccion = 2;
AnalizadorParser.RULE_caso = 3;
AnalizadorParser.RULE_caso_defecto = 4;
AnalizadorParser.RULE_sentencia = 5;
AnalizadorParser.RULE_salida = 6;
AnalizadorParser.RULE_terminar = 7;
AnalizadorParser.RULE_expresion = 8;
AnalizadorParser.RULE_constante = 9;
AnalizadorParser.RULE_cadena = 10;
AnalizadorParser.RULE_numero = 11;
AnalizadorParser.RULE_caracter = 12;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_program;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_seleccion;
    }

	SEGUN() {
	    return this.getToken(AnalizadorParser.SEGUN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	HACER() {
	    return this.getToken(AnalizadorParser.HACER, 0);
	};

	LCURLY() {
	    return this.getToken(AnalizadorParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(AnalizadorParser.RCURLY, 0);
	};

	FINSEGUN() {
	    return this.getToken(AnalizadorParser.FINSEGUN, 0);
	};

	caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CasoContext);
	    } else {
	        return this.getTypedRuleContext(CasoContext,i);
	    }
	};

	caso_defecto() {
	    return this.getTypedRuleContext(Caso_defectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSeleccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_caso;
    }

	CASO() {
	    return this.getToken(AnalizadorParser.CASO, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	DOBPUNT() {
	    return this.getToken(AnalizadorParser.DOBPUNT, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Caso_defectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_caso_defecto;
    }

	DEFECTO() {
	    return this.getToken(AnalizadorParser.DEFECTO, 0);
	};

	DOBPUNT() {
	    return this.getToken(AnalizadorParser.DOBPUNT, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCaso_defecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCaso_defecto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCaso_defecto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(AnalizadorParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(AnalizadorParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(AnalizadorParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(AnalizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(AnalizadorParser.SALIR, 0);
	};

	SEMI() {
	    return this.getToken(AnalizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_expresion;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_constante;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitConstante(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitConstante(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_cadena;
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.COMILLA);
	    } else {
	        return this.getToken(AnalizadorParser.COMILLA, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_numero;
    }

	INT() {
	    return this.getToken(AnalizadorParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_caracter;
    }

	ID() {
	    return this.getToken(AnalizadorParser.ID, 0);
	};

	INT() {
	    return this.getToken(AnalizadorParser.INT, 0);
	};

	SIMB() {
	    return this.getToken(AnalizadorParser.SIMB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.ProgramContext = ProgramContext; 
AnalizadorParser.InstruccionContext = InstruccionContext; 
AnalizadorParser.SeleccionContext = SeleccionContext; 
AnalizadorParser.CasoContext = CasoContext; 
AnalizadorParser.Caso_defectoContext = Caso_defectoContext; 
AnalizadorParser.SentenciaContext = SentenciaContext; 
AnalizadorParser.SalidaContext = SalidaContext; 
AnalizadorParser.TerminarContext = TerminarContext; 
AnalizadorParser.ExpresionContext = ExpresionContext; 
AnalizadorParser.ConstanteContext = ConstanteContext; 
AnalizadorParser.CadenaContext = CadenaContext; 
AnalizadorParser.NumeroContext = NumeroContext; 
AnalizadorParser.CaracterContext = CaracterContext; 
