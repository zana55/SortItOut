package com.example.application.views.main.parser;

import java.util.ArrayList;

public class For_Node implements AST_Node {

    private Assign_Node assign_node;
    private AST_Node logical_expression;
    private Assign_Node change_node;
    private Block_Node block_node;

    public For_Node(Assign_Node assign_n, AST_Node log_expression_n, Assign_Node change_n, Block_Node block_n) {
        assign_node = assign_n;
        logical_expression = log_expression_n;
        change_node = change_n;
        block_node = block_n;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return 0;
    }

    @Override
    public void execute(Memory memory) {
        ArrayList<String> top_frame_state = memory.save_top_frame_state();
        assign_node.execute(memory);
        while(to_Boolean(logical_expression.value(memory))) {
            try {
                block_node.execute(memory);
            } catch (BreakException e) {
                break;
            }
            change_node.execute(memory);
        }
        memory.update_with(top_frame_state);
    }

    private boolean to_Boolean(Integer value) {
        if(value <= 0) return false;
        return true;
    }
}
