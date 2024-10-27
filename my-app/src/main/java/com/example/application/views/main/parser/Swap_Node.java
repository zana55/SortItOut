package com.example.application.views.main.parser;

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
        Integer temp = memory.get_value_at_index(identifier.get_value(), left_value);
        Integer new_left = memory.get_value_at_index(identifier.get_value(), right_value);
        memory.add_value_to_index(identifier.get_value(), left_value, new_left);
        memory.add_value_to_index(identifier.get_value(), right_value, temp);
    }

}
