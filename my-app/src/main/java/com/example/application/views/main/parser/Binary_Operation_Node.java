package com.example.application.views.main.parser;

public class Binary_Operation_Node implements AST_Node {

    private Token operation;
    private AST_Node left;
    private AST_Node right;

    public Binary_Operation_Node(Token op, AST_Node l, AST_Node r) {
        operation = op;
        left = l;
        right = r;
    }

    @Override
    public Integer value(Memory memory) {
        TokenType operation_type = operation.get_type();
        if(operation_type == TokenType.PLUS) {
            return left.value(memory) + right.value(memory);
        } else if(operation_type == TokenType.MINUS) {
            return left.value(memory) - right.value(memory);
        } else if(operation_type == TokenType.MULTIPLY) {
            return left.value(memory) * right.value(memory);
        } else if(operation_type == TokenType.DIVIDE) {
            return left.value(memory) / right.value(memory);
        } else if(operation_type == TokenType.LOG_AND) {
            if(left.value(memory) > 0 && right.value(memory) > 0) return 1;
            return 0;
        } else if(operation_type == TokenType.LOG_OR) {
            if(left.value(memory) > 0 || right.value(memory) > 0) return 1;
            return 0;
        } else {
            throw new RuntimeException("Unsupported binary operation " + operation.get_value() + "!");
        }
    }

    @Override
    public void execute(Memory memory) {
        // should not be called
    }

}
