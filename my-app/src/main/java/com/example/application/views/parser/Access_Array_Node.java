package com.example.application.views.parser;

public class Access_Array_Node implements AST_Node {

    private Token identifier;
    private AST_Node expression;

    public Access_Array_Node(Token id, AST_Node expr) {
        identifier = id;
        expression = expr;
    }

    @Override
    public Integer value(Memory memory) {
        // for now only read array at specific index
        return memory.get(identifier.get_value(), expression.value(memory));
    }

    @Override
    public void execute(Memory memory) {
        // for now should not be called
        // later maybe this function could be used for
        // A[2] = 10;
    }

}
