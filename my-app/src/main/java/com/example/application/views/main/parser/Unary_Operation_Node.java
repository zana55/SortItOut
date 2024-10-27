package com.example.application.views.main.parser;

public class Unary_Operation_Node implements AST_Node {

    private Token operation;
    private AST_Node expression;

    public Unary_Operation_Node(Token op, AST_Node expr) {
        operation = op;
        expression = expr;
    }

    @Override
    public Integer value(Memory memory) {
        TokenType operation_type = operation.get_type();
        if(operation_type == TokenType.MINUS) {
            return (-1) * expression.value(memory);
        } else if (operation_type == TokenType.LOG_NOT) {
            if(expression.value(memory) > 0) return 0;
            return 1;
        }
        throw new RuntimeException("Unsupported unary operation " + operation.get_value() + "!");
    }

    @Override
    public void execute(Memory memory) {
        // should not be called
    }

}

