package com.example.application.views.main.parser;

public class Print_Node implements AST_Node {

    private AST_Node expression;

    public Print_Node(AST_Node expr) {
        expression = expr;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        if(expression instanceof Variable_Node) {
            System.out.println(memory);
            Variable_Node variable = (Variable_Node) expression;
            System.out.println(memory.get_variable_value(variable.get_name()));
        } else {
            System.out.println(expression.value(memory));
        }
    }

}