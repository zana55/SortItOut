package com.example.application.views.main.parser;

public class Function_Parameter {

    public Token token;
    public boolean is_reference;
    public boolean is_array;

    public Function_Parameter(Token id, boolean is_ref, boolean is_arr) {
        token = id;
        is_reference = is_ref;
        is_array = is_arr;
    }

}