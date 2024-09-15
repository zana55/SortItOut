package com.example.application.views.parser;

public interface AST_Node {
    public Integer value(Memory memory);
    public void execute(Memory memory);
}