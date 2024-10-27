package com.example.application.views.main.parser;

public class Number_Node implements AST_Node {

    private Token number;

    public Number_Node(Token num) {
        number = num;
    }

    @Override
    public Integer value(Memory memory) {
        return Integer.parseInt(number.get_value());
    }

    @Override
    public void execute(Memory memory) {
        // should not be called
    }

}