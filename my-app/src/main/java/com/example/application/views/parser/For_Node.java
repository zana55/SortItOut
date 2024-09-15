package com.example.application.views.parser;

public class For_Node implements AST_Node {

    private Assign_Node assign_node;
    private Logical_Literal_Node logical_literal_node;
    private Assign_Node change_node;
    private Block_Node block_node;

    public For_Node(Assign_Node assign_n, Logical_Literal_Node log_literal_n, Assign_Node change_n, Block_Node block_n) {
        assign_node = assign_n;
        logical_literal_node = log_literal_n;
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
        Memory memory_copy = memory.copy();
        assign_node.execute(memory_copy);
        while(to_Boolean(logical_literal_node.value(memory_copy))) {
            block_node.execute(memory_copy);
            change_node.execute(memory_copy);
        }
    }

    private boolean to_Boolean(Integer value) {
        if(value <= 0) return false;
        return true;
    }
}
