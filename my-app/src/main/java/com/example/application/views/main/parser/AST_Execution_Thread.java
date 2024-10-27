package com.example.application.views.main.parser;

import com.vaadin.flow.component.UI;

public class AST_Execution_Thread extends Thread {

    private Algorithm_Node algorithm_node;
    private Memory memory;

    public AST_Execution_Thread(Algorithm_Node alg_node, Memory mem) {
        algorithm_node = alg_node;
        memory = mem;
    }

    public void run() {
        algorithm_node.execute(memory);
    }
}