package com.example.application.views.main.parser;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

public class Algorithm_Node implements AST_Node {

    private ArrayList<AST_Node> commands;

    public Algorithm_Node(ArrayList<AST_Node> command_list) {
        commands = command_list;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    public void execute(Memory memory) {
        for(AST_Node command : commands) {
            command.execute(memory);
        }
    }
}