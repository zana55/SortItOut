package com.example.application.views.main.parser;

public class Assign_Node implements AST_Node {

    private String identifier;
    private AST_Node expression;

    public Assign_Node(Token id, AST_Node expr) {
        identifier = id.get_value();
        expression = expr;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        memory.add_variable(identifier, expression.value(memory));
    }
}
