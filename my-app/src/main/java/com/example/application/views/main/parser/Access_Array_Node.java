package com.example.application.views.main.parser;

public class Access_Array_Node implements AST_Node {

    private Token identifier;
    private AST_Node index;
    private AST_Node value;

    public Access_Array_Node(Token id, AST_Node i) {
        identifier = id;
        index = i;
        value = new Empty_Node();
    }

    public Access_Array_Node(Token id, AST_Node i, AST_Node val) {
        identifier = id;
        index = i;
        value = val;
    }

    @Override
    public Integer value(Memory memory) {
        return memory.get_value_at_index(identifier.get_value(), index.value(memory));
    }

    @Override
    public void execute(Memory memory) {
        memory.add_value_to_index(identifier.get_value(), index.value(memory), value.value(memory));
    }

}

