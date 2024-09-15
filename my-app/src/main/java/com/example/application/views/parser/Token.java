package com.example.application.views.parser;

public class Token {
    private TokenType token_type;
    private String value;
    public Token(TokenType type){
        token_type = type;
        value = "";
    }

    public Token(TokenType type, String val){
        token_type = type;
        value = val;
    }

    @Override
    public String toString(){
        return token_type.toString();
    }

    public TokenType get_type() {
        return token_type;
    }

    public String get_value() {
        return value;
    }
}