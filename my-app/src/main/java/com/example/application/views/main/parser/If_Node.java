package com.example.application.views.main.parser;

public class If_Node implements AST_Node {

    private AST_Node logical_literal_node;
    private Block_Node block_node;
    private boolean else_exists;
    private AST_Node else_node;

    public If_Node(AST_Node log_lit_n, Block_Node block_n) {
        logical_literal_node = log_lit_n;
        block_node = block_n;
        else_exists = false;
        else_node = new Empty_Node();
    }

    public If_Node(AST_Node log_lit_n, Block_Node block_n, AST_Node else_n) {
        logical_literal_node = log_lit_n;
        block_node = block_n;
        else_exists = true;
        else_node = else_n;
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
        else if (else_exists) {
            else_node.execute(memory);
        }
    }

    private boolean to_Boolean(Integer value) {
        if(value <= 0) return false;
        return true;
    }

}
