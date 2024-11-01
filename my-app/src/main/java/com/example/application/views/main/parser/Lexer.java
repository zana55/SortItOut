package com.example.application.views.main.parser;

import java.util.ArrayList;

public class Lexer {
    private ArrayList<Token> tokens = new ArrayList<>();
    private final String input_code;
    public Lexer(String input){
        input_code = input + "\n";
        for (int i = 0; i < input_code.length(); ++i) {
            char c = input_code.charAt(i);
            if(c == ' ' || c == '\t'){
                continue;
            }
            else if (c == '/' && input_code.charAt(i+1) == '*') {
                i += 2;
                i += read_until("*/", i);
            }
            else if(Character.isLetter(c) || c == '_'){
                String word = read_alphanumeric(i);
                i += word.length() - 1;
                TokenType type = TokenType.fromString(word);
                if(type == TokenType.IDENTIFIER) {
                    tokens.add(new Token(type, word));
                }
                else {
                    tokens.add(new Token(type));
                }
            }
            else if(Character.isDigit(c)){
                String number = read_numeric(i);
                i += number.length() - 1;
                tokens.add(new Token(TokenType.NUMBER, number));
            }
            else{
                TokenType is_two_char = two_char_token(i);
                if(is_two_char != TokenType.NONE){
                    ++i;
                    tokens.add(new Token(is_two_char));
                }
                else{
                    TokenType type = TokenType.fromChar(c);
                    tokens.add(new Token(type));
                }
            }
        }
        tokens.add(new Token(TokenType.EOF));
    }

    private int read_until(String string, int index) {
        int count = 0;
        while(true) {
            if(index + count + string.length() >= input_code.length()) {
                throw new RuntimeException("Unterminated comment /*");
            }
            String substr = input_code.substring(index + count, index + count + string.length());
            ++count;
            if(string.equals(substr)) {
                break;
            }
        }
        return count;
    }

    public ArrayList<Token> get_tokens(){
        return tokens;
    }

    private TokenType two_char_token(int i) {
        if(i >= input_code.length() - 1) return TokenType.NONE;
        char c = input_code.charAt(i);
        if(c == '+' && input_code.charAt(i+1) == '='){
            return TokenType.PLUS_EQUAL;
        }
        else if(c == '-' && input_code.charAt(i+1) == '='){
            return TokenType.MINUS_EQUAL;
        }
        else if(c == '<' && input_code.charAt(i+1) == '='){
            return TokenType.LESS_OR_EQUAL;
        }
        else if(c == '>' && input_code.charAt(i+1) == '='){
            return TokenType.GREATER_OR_EQUAL;
        }
        else if(c == '=' && input_code.charAt(i+1) == '='){
            return TokenType.EQUAL;
        }
        else if(c == '!' && input_code.charAt(i+1) == '='){
            return TokenType.NOT_EQUAL;
        }
        else if(c == '|' && input_code.charAt(i+1) == '|'){
            return TokenType.LOG_OR;
        }
        else if(c == '&' && input_code.charAt(i+1) == '&'){
            return TokenType.LOG_AND;
        }
        return TokenType.NONE;
    }

    private String read_alphanumeric(int i){
        char c = input_code.charAt(i);
        int len = input_code.length();
        String return_string = "";
        while(i < len - 1 && (Character.isLetterOrDigit(c) || c == '_')){
            return_string += c;
            c = input_code.charAt(++i);
        }
        return return_string;
    }

    private String read_numeric(int i){
        char c = input_code.charAt(i);
        int len = input_code.length();
        String return_string = "";
        while(i < len - 1 && Character.isDigit(c)){
            return_string += c;
            c = input_code.charAt(++i);
        }
        return return_string;
    }
}


