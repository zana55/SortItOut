package com.example.application.views.main.parser;

import java.util.ArrayList;
public class Parser {
    private ArrayList<Token> tokens;
    private int current_token;
    private int current_line_number;
    private int nested_loops;
    private boolean defining_function;

    public Parser(String input_code){
        Lexer lexer = new Lexer(input_code);
        tokens = lexer.get_tokens();
        current_token = -1;
        current_line_number = 0;
        nested_loops = 0;
        defining_function = false;
    }

    public Algorithm_Node parse() {
        return p_algorithm();
    }

    private boolean is_next(TokenType next) {
        while(tokens.get(current_token + 1).get_type() == TokenType.NEWLINE) {
            ++current_token;
            ++current_line_number;
        }
        return tokens.get(current_token + 1).get_type() == next;
    }

    private Token require_next(TokenType next) {
        if(!is_next(next)) {
            throw new IllegalArgumentException("Unexpected token " + next + " on line " + current_line_number + "!");
        }
        return go_next();
    }

    private boolean go_next_if(TokenType next) {
        if(is_next(next)) {
            go_next();
            return true;
        }
        return false;
    }

    private Token go_next() {
        return tokens.get(++current_token);
    }

    private Algorithm_Node p_algorithm() {
        ArrayList<AST_Node> commands = new ArrayList<>();
        while(!is_next(TokenType.EOF)) {
            commands.add(p_command());
            go_next_if(TokenType.NEWLINE);
        }
        return new Algorithm_Node(commands);
    }

    private AST_Node p_command() {
        if(go_next_if(TokenType.NEWLINE)) {
            return new Empty_Node();
        }
        else if(is_next(TokenType.FUNCTION)) {
            return p_function_definition();
        }
        else if(is_next(TokenType.FOR)) {
            return p_for();
        }
        else if(is_next(TokenType.WHILE)) {
            return p_while();
        }
        else if(is_next(TokenType.IF)) {
            return p_if();
        }
        else if(is_next(TokenType.LEFT_CURLY)) {
            return p_block();
        }
        else if(is_next(TokenType.SWAP)) {
            return p_swap();
        }
        else if(is_next(TokenType.SLEEP)) {
            return p_sleep();
        }
        else if(is_next(TokenType.PRINT)) {
            return p_print();
        }
        else if(is_next(TokenType.BREAK)) {
            return p_break();
        }
        else if(is_next(TokenType.RETURN)) {
            return p_return();
        }
        else if(is_next(TokenType.IDENTIFIER)) {
            return p_command_w_identifier();
        }
        else {
            throw new RuntimeException("Token " + go_next() + " on line "
                    + current_line_number + " is not allowed or not yet implemented!");
        }
    }

    private Function_Definition_Node p_function_definition() {
        if(defining_function) {
            throw new RuntimeException("Function definition inside another function definition is not allowed!");
        }
        defining_function = true;
        require_next(TokenType.FUNCTION);
        Token identifier = require_next(TokenType.IDENTIFIER);
        ArrayList<Function_Parameter> parameters = p_function_parameters();
        Block_Node function_block = p_block();
        defining_function = false;
        return new Function_Definition_Node(identifier, parameters, function_block);
    }

    private ArrayList<Function_Parameter> p_function_parameters() {
        ArrayList<Function_Parameter> parameters = new ArrayList<>();
        require_next(TokenType.LEFT_PARENTHESIS);
        while(!is_next(TokenType.RIGHT_PARENTHESIS)){
            boolean is_reference = go_next_if(TokenType.REFERENCE);
            Token identifier = require_next(TokenType.IDENTIFIER);
            boolean is_array = go_next_if(TokenType.LEFT_BRACKETS);
            if(is_array) {
                require_next(TokenType.RIGHT_BRACKETS);
            }
            parameters.add(new Function_Parameter(identifier, is_reference, is_array));
            if(!is_next(TokenType.RIGHT_PARENTHESIS)) {
                require_next(TokenType.COMMA);
            }
        }
        require_next(TokenType.RIGHT_PARENTHESIS);
        return parameters;
    }

    private ArrayList<AST_Node> p_function_arguments() {
        ArrayList<AST_Node> arguments = new ArrayList<>();
        require_next(TokenType.LEFT_PARENTHESIS);
        while(!is_next(TokenType.RIGHT_PARENTHESIS)){
            arguments.add(p_expression());
            if(!is_next(TokenType.RIGHT_PARENTHESIS)) {
                require_next(TokenType.COMMA);
            }
        }
        require_next(TokenType.RIGHT_PARENTHESIS);
        return arguments;
    }

    private For_Node p_for() {
        require_next(TokenType.FOR);
        require_next(TokenType.LEFT_PARENTHESIS);
        Assign_Node assign_node = p_assign();
        require_next(TokenType.SEMICOLON);
        AST_Node logical_expression = p_logical_expression();
        require_next(TokenType.SEMICOLON);
        Assign_Node change_node = p_assign();
        require_next(TokenType.RIGHT_PARENTHESIS);
        ++nested_loops;
        Block_Node block_node = p_block();
        --nested_loops;
        return new For_Node(assign_node, logical_expression, change_node, block_node);
    }

    private While_Node p_while() {
        require_next(TokenType.WHILE);
        require_next(TokenType.LEFT_PARENTHESIS);
        AST_Node logical_expression = p_logical_expression();
        require_next(TokenType.RIGHT_PARENTHESIS);
        ++nested_loops;
        Block_Node block_node = p_block();
        --nested_loops;
        return new While_Node(logical_expression, block_node);
    }

    private If_Node p_if() {
        require_next(TokenType.IF);
        require_next(TokenType.LEFT_PARENTHESIS);
        AST_Node logical_expression = p_logical_expression();
        require_next(TokenType.RIGHT_PARENTHESIS);
        Block_Node block_node = p_block();
        go_next_if(TokenType.NEWLINE);
        if(go_next_if(TokenType.ELSE)) {
            Block_Node else_node = p_block();
            return new If_Node(logical_expression, block_node, else_node);
        }
        return new If_Node(logical_expression, block_node);
    }

    private Block_Node p_block() {
        ArrayList<AST_Node> commands = new ArrayList<>();
        if(!is_next(TokenType.LEFT_CURLY)) {
            commands.add(p_command());
            return new Block_Node(commands);
        }
        require_next(TokenType.LEFT_CURLY);
        while(!go_next_if(TokenType.RIGHT_CURLY)) {
            go_next_if(TokenType.NEWLINE);
            commands.add(p_command());
            go_next_if(TokenType.NEWLINE);
        }
        return new Block_Node(commands);
    }

    private Swap_Node p_swap() {
        require_next(TokenType.SWAP);
        require_next(TokenType.LEFT_PARENTHESIS);
        Token identifier = require_next(TokenType.IDENTIFIER);
        require_next(TokenType.COMMA);
        AST_Node left_expression = p_expression();
        require_next(TokenType.COMMA);
        AST_Node right_expression = p_expression();
        require_next(TokenType.RIGHT_PARENTHESIS);
        return new Swap_Node(identifier, left_expression, right_expression);
    }

    private Sleep_Node p_sleep() {
        require_next(TokenType.SLEEP);
        require_next(TokenType.LEFT_PARENTHESIS);
        AST_Node expression = p_expression();
        require_next(TokenType.RIGHT_PARENTHESIS);
        return new Sleep_Node(expression);
    }

    private Print_Node p_print() {
        require_next(TokenType.PRINT);
        require_next(TokenType.LEFT_PARENTHESIS);
        AST_Node expression = p_expression();
        require_next(TokenType.RIGHT_PARENTHESIS);
        return new Print_Node(expression);
    }

    private Break_Node p_break() {
        if(nested_loops <= 0) {
            throw new RuntimeException("Break on line "
                    + current_line_number + " is not inside for loop!");
        }
        require_next(TokenType.BREAK);
        return new Break_Node();
    }

    private Return_Node p_return() {
        if(!defining_function) {
            throw new RuntimeException("Return on line "
                    + current_line_number + " is not inside a function definition!");
        }
        require_next(TokenType.RETURN);
        AST_Node expression = p_expression();
        return new Return_Node(expression);
    }

    private AST_Node p_command_w_identifier() {
        Token identifier = require_next(TokenType.IDENTIFIER);
        if(go_next_if(TokenType.ASSIGN)) {
            if(go_next_if(TokenType.LEFT_BRACKETS)) {
                AST_Node size = p_expression();
                require_next(TokenType.RIGHT_BRACKETS);
                return new Initialize_Array_Node(identifier, size);
            }
            else if(is_next(TokenType.LEFT_CURLY)) {
                ArrayList<AST_Node> array = p_array_definition();
                return new Initialize_Array_Node(identifier, array);
            }
            AST_Node expression = p_expression();
            return new Assign_Node(identifier, expression);
        } else if(go_next_if(TokenType.LEFT_BRACKETS)) {
            AST_Node index = p_expression();
            require_next(TokenType.RIGHT_BRACKETS);
            if(is_next(TokenType.PLUS_EQUAL) || is_next(TokenType.MINUS_EQUAL)) {
                TokenType type = is_next(TokenType.PLUS_EQUAL) ? TokenType.PLUS : TokenType.MINUS;
                go_next();
                return new Access_Array_Node(identifier, index,
                        new Binary_Operation_Node(new Token(type), new Access_Array_Node(identifier, index), p_expression()));
            }
            require_next(TokenType.ASSIGN);
            AST_Node value = p_expression();
            return new Access_Array_Node(identifier, index, value);
        }
        else if(is_next(TokenType.LEFT_PARENTHESIS)) {
            ArrayList<AST_Node> function_arguments = p_function_arguments();
            return new Function_Call_Node(identifier, function_arguments);
        }
        else if(is_next(TokenType.PLUS_EQUAL) || is_next(TokenType.MINUS_EQUAL)) {
            TokenType type = is_next(TokenType.PLUS_EQUAL) ?
                    TokenType.PLUS : TokenType.MINUS;
            go_next();
            return new Assign_Node(identifier,
                    new Binary_Operation_Node(new Token(type),
                            new Variable_Node(identifier), p_expression()));
        }
        throw new RuntimeException("Token " + go_next() + " on line "
                + current_line_number + " is not allowed or not yet implemented!");
    }

    private ArrayList<AST_Node> p_array_definition(){
        require_next(TokenType.LEFT_CURLY);
        ArrayList<AST_Node> array = new ArrayList<>();
        while(!is_next(TokenType.RIGHT_CURLY)){
            array.add(p_expression());
            if(!is_next(TokenType.RIGHT_CURLY)) {
                require_next(TokenType.COMMA);
            }
        }
        require_next(TokenType.RIGHT_CURLY);
        return array;
    }

    private Assign_Node p_assign() {
        Token identifier = require_next(TokenType.IDENTIFIER);
        if(is_next(TokenType.PLUS_EQUAL) || is_next(TokenType.MINUS_EQUAL)) {
            TokenType type = is_next(TokenType.PLUS_EQUAL) ? TokenType.PLUS : TokenType.MINUS;
            go_next();
            return new Assign_Node(identifier, new Binary_Operation_Node(new Token(type), new Variable_Node(identifier), p_expression()));
        }
        require_next(TokenType.ASSIGN);
        return new Assign_Node(identifier, p_expression());
    }

    private TokenType p_comparison() {
        if(go_next_if(TokenType.LESS_THAN)) {
            return TokenType.LESS_THAN;
        }
        else if(go_next_if(TokenType.LESS_OR_EQUAL)) {
            return TokenType.LESS_OR_EQUAL;
        }
        else if(go_next_if(TokenType.GREATER_THAN)) {
            return TokenType.GREATER_THAN;
        }
        else if(go_next_if(TokenType.GREATER_OR_EQUAL)) {
            return TokenType.GREATER_OR_EQUAL;
        }
        else if(go_next_if(TokenType.EQUAL)) {
            return TokenType.EQUAL;
        }
        else {
            return require_next(TokenType.NOT_EQUAL).get_type();
        }
    }

    private AST_Node p_logical_expression() {
        return p_logical_OR();
    }

    private AST_Node p_logical_OR() {
        AST_Node accum = p_logical_AND();
        while(is_next(TokenType.LOG_OR)) {
            accum = new Binary_Operation_Node(go_next(), accum, p_logical_AND());
        }
        return accum;
    }

    private AST_Node p_logical_AND() {
        AST_Node accum = p_logical_maybe_NOT();
        while(is_next(TokenType.LOG_AND)) {
            accum = new Binary_Operation_Node(go_next(), accum, p_logical_maybe_NOT());
        }
        return accum;
    }

    private AST_Node p_logical_maybe_NOT() {
        if(is_next(TokenType.LOG_NOT)) {
            return new Unary_Operation_Node(go_next(), p_logical_maybe_NOT());
        }
        return p_logical_literal();
    }

    private AST_Node p_logical_literal() {
        if(go_next_if(TokenType.LEFT_PARENTHESIS)) {
            AST_Node logical_expression = p_logical_expression();
            require_next(TokenType.RIGHT_PARENTHESIS);
            return logical_expression;
        }
        AST_Node left_expression = p_expression();
        TokenType comparison = p_comparison();
        AST_Node right_expression = p_expression();
        return new Logical_Literal_Node(left_expression, comparison, right_expression);
    }

    private AST_Node p_expression() {
        AST_Node accum = p_addend();
        while(is_next(TokenType.PLUS) || is_next(TokenType.MINUS)) {
            accum = new Binary_Operation_Node(go_next(), accum, p_addend());
        }
        return accum;
    }

    private AST_Node p_addend() {
        AST_Node accum = p_factor();
        while(is_next(TokenType.MULTIPLY) || is_next(TokenType.DIVIDE)) {
            accum = new Binary_Operation_Node(go_next(), accum, p_addend());
        }
        return accum;
    }

    private AST_Node p_factor() {
        if(is_next(TokenType.MINUS)) {
            return new Unary_Operation_Node(go_next(), p_factor());
        }
        return p_base();
    }

    private AST_Node p_base() {
        if(go_next_if(TokenType.LEFT_PARENTHESIS)) {
            AST_Node expression = p_expression();
            require_next(TokenType.RIGHT_PARENTHESIS);
            return expression;
        }
        else if(is_next(TokenType.NUMBER)) {
            return new Number_Node(require_next(TokenType.NUMBER));
        }
        else if(go_next_if(TokenType.SIZE)) {
            require_next(TokenType.LEFT_PARENTHESIS);
            Token identifier = require_next(TokenType.IDENTIFIER);
            require_next(TokenType.RIGHT_PARENTHESIS);
            return new Size_Node(identifier);
        }
        else {
            return p_variable();
        }
    }

    private AST_Node p_variable() {
        Token identifier = require_next(TokenType.IDENTIFIER);
        if(go_next_if(TokenType.LEFT_BRACKETS)) {
            AST_Node expression = p_expression();
            require_next(TokenType.RIGHT_BRACKETS);
            return new Access_Array_Node(identifier, expression);
        }
        else if(is_next(TokenType.LEFT_PARENTHESIS)) {
            ArrayList<AST_Node> function_arguments = p_function_arguments();
            return new Function_Call_Node(identifier, function_arguments);
        }
        return new Variable_Node(identifier);
    }
}


