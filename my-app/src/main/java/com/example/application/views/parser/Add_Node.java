package com.example.application.views.parser;

public class Add_Node implements AST_Node {

    private AST_Node left_node;
    private AST_Node right_node;

    public Add_Node(AST_Node left, AST_Node right) {
        left_node = left;
        right_node = right;
    }

    @Override
    public Integer value(Memory memory) {
        return left_node.value(memory) + right_node.value(memory);
    }

    @Override
    public void execute(Memory memory) {
        // should not be called
    }

}
