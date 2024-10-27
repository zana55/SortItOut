package com.example.application.views.main.parser;

public enum TokenType {
    // Keywords
    IF("if"), ELSE("else"), FOR("for"), RETURN("return"), WHILE("while"),
    FUNCTION("function"), SWAP("swap"), SLEEP("sleep"), BREAK("break"), SIZE("size"), PRINT("print"),

    // Operators
    PLUS("+"), MINUS("-"), MULTIPLY("*"), DIVIDE("/"), ASSIGN("="),
    PLUS_EQUAL("+="), MINUS_EQUAL("-="),

    LESS_THAN("<"), GREATER_THAN(">"), LESS_OR_EQUAL("<="),
    GREATER_OR_EQUAL(">="), EQUAL("=="), NOT_EQUAL("!="),
    LOG_OR("||"), LOG_AND("&&"), LOG_NOT("!"),

    // Delimiters
    LEFT_PARENTHESIS("("), RIGHT_PARENTHESIS(")"), LEFT_CURLY("{"), RIGHT_CURLY("}"), REFERENCE("&"),
    LEFT_BRACKETS("["), RIGHT_BRACKETS("]"), SEMICOLON(";"), NEWLINE("\n"), COMMA(","),

    // Literals
    IDENTIFIER, NUMBER,

    // UNIDENTIFIED
    NONE,

    // End of File
    EOF;

    private final String symbol;

    // Constructor for tokens with specific symbols
    TokenType(String symbol) {
        this.symbol = symbol;
    }

    // Default constructor for token types without specific symbols
    TokenType() {
        this.symbol = null;
    }

    public static TokenType fromChar(char ch) {
        for (TokenType type : TokenType.values()) {
            if (type.symbol != null && type.symbol.equals(Character.toString(ch))) {
                return type;
            }
        }
        throw new IllegalArgumentException("No TokenType found for symbol: " + ch);
    }

    public static TokenType fromString(String str) {
        for (TokenType type : TokenType.values()) {
            if (type.symbol != null && type.symbol.equals(str)) {
                return type;
            }
        }
        return TokenType.IDENTIFIER;
    }

    // Getter for the token's symbol
    public String getSymbol() {
        return symbol;
    }

    @Override
    public String toString() {
        return name();
    }
}