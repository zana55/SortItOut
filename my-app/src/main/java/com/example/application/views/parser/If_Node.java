package com.example.application.views.parser;

public class If_Node implements AST_Node {

    private Logical_Literal_Node logical_literal_node;
    private Block_Node block_node;

    public If_Node(Logical_Literal_Node log_lit_n, Block_Node block_n) {
        logical_literal_node = log_lit_n;
        block_node = block_n;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        if(to_Boolean(logical_literal_node.value(memory))) {
            block_node.execute(memory);
        }
    }

    private boolean to_Boolean(Integer value) {
        if(value <= 0) return false;
        return true;
    }

}