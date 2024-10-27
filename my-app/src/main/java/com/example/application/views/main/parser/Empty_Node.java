package com.example.application.views.main.parser;

public class Empty_Node implements AST_Node {

    public Empty_Node() {

    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {

    }

}