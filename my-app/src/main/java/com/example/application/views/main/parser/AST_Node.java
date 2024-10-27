package com.example.application.views.main.parser;

public interface AST_Node {
    public Integer value(Memory memory);
    public void execute(Memory memory) throws BreakException, ReturnException;
}