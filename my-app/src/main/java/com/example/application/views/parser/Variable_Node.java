package com.example.application.views.parser;

public class Variable_Node implements AST_Node {

    private Token identifier;

    public Variable_Node(Token id) {
        identifier = id;
    }

    @Override
    public Integer value(Memory memory) {
        return memory.get(identifier.get_value());
    }

    @Override
    public void execute(Memory memory) {
        // should not be called
    }

}