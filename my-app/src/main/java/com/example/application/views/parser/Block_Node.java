package com.example.application.views.parser;

import java.util.ArrayList;

public class Block_Node implements AST_Node {

    private ArrayList<AST_Node> commands;

    public Block_Node(ArrayList<AST_Node> comm) {
        commands = comm;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        for(AST_Node command : commands) {
            command.execute(memory);
        }
    }

}