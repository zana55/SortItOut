package com.example.application.views.main.parser;

public class Break_Node implements AST_Node {

    public Break_Node() {

    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) throws BreakException {
        throw new BreakException();
    }

}
