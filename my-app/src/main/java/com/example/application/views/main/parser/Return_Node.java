package com.example.application.views.main.parser;

public class Return_Node implements AST_Node {

    private AST_Node expression;

    public Return_Node(AST_Node expr) {
        expression = expr;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        throw new ReturnException(expression.value(memory));
    }

}

