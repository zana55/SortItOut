package com.example.application.views.main.parser;

import java.util.ArrayList;

public class Function_Definition_Node implements AST_Node {

    public Token identifier;
    public ArrayList<Function_Parameter> function_parameters;
    public Block_Node function_block;

    public Function_Definition_Node(Token id, ArrayList<Function_Parameter> params, Block_Node block) {
        identifier = id;
        function_parameters = params;
        function_block = block;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        // add function to memory
        memory.add_function(identifier.get_value(), this);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Name: ").append(identifier.get_value()).append("\n");
        sb.append("Parameters: (");
        for(int i = 0; i < function_parameters.size(); ++i) {
            sb.append(function_parameters.get(i).token.get_value());
            if (i < function_parameters.size() - 1) {
                sb.append(", ");
            }
        }
        sb.append(")\n");
        return sb.toString();
    }

}
