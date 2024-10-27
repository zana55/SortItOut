package com.example.application.views.main.parser;

import java.util.ArrayList;

public class While_Node implements AST_Node {

    private AST_Node logical_expression;
    private Block_Node block_node;

    public While_Node(AST_Node log_expr, Block_Node block_n) {
        logical_expression = log_expr;
        block_node = block_n;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        ArrayList<String> top_frame_state = memory.save_top_frame_state();
        while(to_Boolean(logical_expression.value(memory))) {
            try {
                block_node.execute(memory);
            } catch (BreakException e) {
                break;
            }
        }
        memory.update_with(top_frame_state);
    }

    private boolean to_Boolean(Integer value) {
        if(value <= 0) return false;
        return true;
    }

}