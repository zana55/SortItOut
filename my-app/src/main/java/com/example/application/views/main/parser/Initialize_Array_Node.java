package com.example.application.views.main.parser;

import java.util.ArrayList;

public class Initialize_Array_Node implements AST_Node {

    private Token identifier;
    private AST_Node size;
    private ArrayList<AST_Node> array;

    public Initialize_Array_Node(Token id, AST_Node array_size) {
        identifier = id;
        size = array_size;
        array = null;
    }

    public Initialize_Array_Node(Token id, ArrayList<AST_Node> arr) {
        identifier = id;
        array = arr;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        if(array != null) {
            for(int i = 0; i < array.size(); ++i) {
                list.add(array.get(i).value(memory));
            }
        }
        else {
            int arr_size = size.value(memory);
            for(int i = 0; i < arr_size; ++i) {
                list.add(0);
            }
        }
        memory.add_array(identifier.get_value(), list);
    }

}
