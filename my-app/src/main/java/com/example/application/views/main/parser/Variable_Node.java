package com.example.application.views.main.parser;

public class Variable_Node implements AST_Node {

    private Token identifier;

    public Variable_Node(Token id) {
        identifier = id;
    }

    @Override
    public Integer value(Memory memory) {
        return memory.get_variable_value(identifier.get_value());
    }

    @Override
    public void execute(Memory memory) {
        // should not be called
    }

    public String get_name() {
        return identifier.get_value();
    }

}