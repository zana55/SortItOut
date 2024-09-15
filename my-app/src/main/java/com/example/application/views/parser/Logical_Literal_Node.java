package com.example.application.views.parser;

public class Logical_Literal_Node implements AST_Node {

    private AST_Node left_expression;
    private TokenType comparison;
    private AST_Node right_expression;

    public Logical_Literal_Node(AST_Node left, TokenType comp, AST_Node right) {
        left_expression = left;
        comparison = comp;
        right_expression = right;
    }

    @Override
    public Integer value(Memory memory) {
        if(comparison == TokenType.LESS_THAN) {
            return to_Integer(left_expression.value(memory) < right_expression.value(memory));
        }
        else if(comparison == TokenType.LESS_OR_EQUAL) {
            return to_Integer(left_expression.value(memory) <= right_expression.value(memory));
        }
        else if(comparison == TokenType.GREATER_THAN) {
            return to_Integer(left_expression.value(memory) > right_expression.value(memory));
        }
        else if(comparison == TokenType.GREATER_OR_EQUAL) {
            return to_Integer(left_expression.value(memory) >= right_expression.value(memory));
        }
        else if(comparison == TokenType.EQUAL) {
            return to_Integer(left_expression.value(memory) == right_expression.value(memory));
        }
        else {
            return to_Integer(left_expression.value(memory) != right_expression.value(memory));
        }
    }

    @Override
    public void execute(Memory memory) {
        // should not be called
    }

    private Integer to_Integer(boolean value) {
        return value ? 1 : 0;
    }

}