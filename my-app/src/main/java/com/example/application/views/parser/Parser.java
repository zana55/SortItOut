package com.example.application.views.parser;

import java.util.ArrayList;
public class Parser {
    private ArrayList<Token> tokens;
    private int current_token;
    private int current_line_number;

    public Parser(String input_code){
        Lexer lexer = new Lexer(input_code);
        tokens = lexer.get_tokens();
        current_token = -1;
    }

    public Algorithm_Node parse() {
        return p_algorithm();
    }

    private boolean is_next(TokenType next) {
        return tokens.get(current_token + 1).get_type() == next;
    }

    private Token require_next(TokenType next) {
        if(!is_next(next)) {
            throw new IllegalArgumentException("Unexpected token " + next + " on line " + current_line_number + "!");
        }
        return go_next();
    }

    private boolean go_next_if(TokenType next) {
        if(next == TokenType.NEWLINE && is_next(next)) {
            ++current_line_number;
        }
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
        else if(is_next(TokenType.FOR)) {
            return p_for();
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
        else {
            throw new RuntimeException("Token " + go_next() + " on line "
                    + current_line_number + " is not allowed or not yet implemented!");
        }
    }

    private For_Node p_for() {
        require_next(TokenType.FOR);
        require_next(TokenType.LEFT_PARENTHESIS);
        Assign_Node assign_node = p_assign();
        require_next(TokenType.SEMICOLON);
        Logical_Literal_Node log_literal_node = p_log_literal();
        require_next(TokenType.SEMICOLON);
        Assign_Node change_node = p_assign();
        require_next(TokenType.RIGHT_PARENTHESIS);
        Block_Node block_node = p_block();
        return new For_Node(assign_node, log_literal_node, change_node, block_node);
    }

    private If_Node p_if() {
        require_next(TokenType.IF);
        require_next(TokenType.LEFT_PARENTHESIS);
        Logical_Literal_Node log_literal_node = p_log_literal();
        require_next(TokenType.RIGHT_PARENTHESIS);
        Block_Node block_node = p_block();
        return new If_Node(log_literal_node, block_node);
    }

    private Block_Node p_block() {
        ArrayList<AST_Node> commands = new ArrayList<>();
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

    private Assign_Node p_assign() {
        Token identifier = require_next(TokenType.IDENTIFIER);
        require_next(TokenType.ASSIGN);
        AST_Node expression = p_expression();
        return new Assign_Node(identifier, expression);
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

    private Logical_Literal_Node p_log_literal() {
        AST_Node left_expression = p_expression();
        TokenType comparison = p_comparison();
        AST_Node right_expression = p_expression();
        return new Logical_Literal_Node(left_expression, comparison, right_expression);
    }

    private AST_Node p_expression() {
        AST_Node left = p_factor();
        if(go_next_if(TokenType.MULTIPLY)) {
            AST_Node right = p_expression();
            return new Multiply_Node(left, right);
        }
        else if(go_next_if(TokenType.DIVIDE)) {
            AST_Node right = p_expression();
            return new Divide_Node(left, right);
        }
        return left;
    }

    private AST_Node p_factor() {
        AST_Node left = p_base();
        if(go_next_if(TokenType.PLUS)) {
            AST_Node right = p_expression();
            return new Add_Node(left, right);
        }
        else if(go_next_if(TokenType.MINUS)) {
            AST_Node right = p_expression();
            return new Subtract_Node(left, right);
        }
        return left;
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
        return new Variable_Node(identifier);
    }
}


