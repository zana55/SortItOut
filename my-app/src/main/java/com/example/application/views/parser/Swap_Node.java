package com.example.application.views.parser;

public class Swap_Node implements AST_Node {

    private Token identifier;
    private AST_Node left_expression;
    private AST_Node right_expression;

    public Swap_Node(Token id, AST_Node left, AST_Node right) {
        identifier = id;
        left_expression = left;
        right_expression = right;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called;
        return null;
    }

    @Override
    public void execute(Memory memory) {
        Integer left_value = left_expression.value(memory);
        Integer right_value = right_expression.value(memory);
        Integer temp = memory.get(identifier.get_value(), left_value);
        Integer new_left = memory.get(identifier.get_value(), right_value);
        memory.add(identifier.get_value(), left_value, new_left);
        memory.add(identifier.get_value(), right_value, temp);
    }

}
