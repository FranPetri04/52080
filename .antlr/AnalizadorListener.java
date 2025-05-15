// Generated from c:/Users/Usuario/Desktop/Franco/Analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AnalizadorParser}.
 */
public interface AnalizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(AnalizadorParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(AnalizadorParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(AnalizadorParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(AnalizadorParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void enterSeleccion(AnalizadorParser.SeleccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void exitSeleccion(AnalizadorParser.SeleccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#caso}.
	 * @param ctx the parse tree
	 */
	void enterCaso(AnalizadorParser.CasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#caso}.
	 * @param ctx the parse tree
	 */
	void exitCaso(AnalizadorParser.CasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void enterCaso_defecto(AnalizadorParser.Caso_defectoContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void exitCaso_defecto(AnalizadorParser.Caso_defectoContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(AnalizadorParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(AnalizadorParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(AnalizadorParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(AnalizadorParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(AnalizadorParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(AnalizadorParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(AnalizadorParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(AnalizadorParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#constante}.
	 * @param ctx the parse tree
	 */
	void enterConstante(AnalizadorParser.ConstanteContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#constante}.
	 * @param ctx the parse tree
	 */
	void exitConstante(AnalizadorParser.ConstanteContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(AnalizadorParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(AnalizadorParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(AnalizadorParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(AnalizadorParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(AnalizadorParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(AnalizadorParser.CaracterContext ctx);
}