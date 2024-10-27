package com.example.application.views.main.parser;

import java.util.ArrayList;

public class Function_Call_Node implements AST_Node {

    private Token identifier;
    private ArrayList<AST_Node> arguments;

    public Function_Call_Node(Token id, ArrayList<AST_Node> params) {
        arguments = params;
        identifier = id;
    }

    @Override
    public Integer value(Memory memory) {
        Function_Definition_Node function = memory.get_function(identifier.get_value());
        if(arguments.size() != function.function_parameters.size()) {
            throw new IllegalArgumentException(
                    "Function " + identifier.get_value() + " takes " + function.function_parameters.size() + " arguments, "
                            + arguments.size() + " provided!");
        }
        Frame frame = new Frame();
        for(int i = 0; i < arguments.size(); ++i) {
            AST_Node argument = arguments.get(i);
            Function_Parameter parameter = function.function_parameters.get(i);
            add_argument_to_frame(frame, memory, parameter, argument);
        }
        memory.append_frame(frame);
        try {
            function.function_block.execute(memory);
        } catch(ReturnException re) {
            memory.pop_frame();
            return re.get_value();
        }
        memory.pop_frame();
        return null;
    }

    @Override
    public void execute(Memory memory) {
        value(memory);
    }

    private void add_argument_to_frame(Frame frame, Memory memory, Function_Parameter parameter, AST_Node argument) {
        if(parameter.is_reference && !(argument instanceof Variable_Node)) {
            throw new IllegalArgumentException("Argument " + argument.value(memory) + " in call of function '"
                    + identifier.get_value() + "' cannot be referenced - it's not a variable!");
        }
        if(parameter.is_reference && parameter.is_array) {
            Variable_Node variable = (Variable_Node) argument;
            frame.add_reference_array(parameter.token.get_value(), variable.get_name());
        } else if (parameter.is_reference && !parameter.is_array) {
            Variable_Node variable = (Variable_Node) argument;
            frame.add_reference(parameter.token.get_value(), variable.get_name());
        } else if (!parameter.is_reference && parameter.is_array) {
            Variable_Node variable = (Variable_Node) argument;
            frame.add_array(parameter.token.get_value(), memory.get_array(variable.get_name()));
        } else if (!parameter.is_reference && !parameter.is_array) {
            frame.add_variable(parameter.token.get_value(), argument.value(memory));
        }
    }

}