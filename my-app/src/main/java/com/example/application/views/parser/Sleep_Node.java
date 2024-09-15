package com.example.application.views.parser;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;

import static com.example.application.views.main.HelperFunctions.createBars;

public class Sleep_Node implements AST_Node {

    private AST_Node expression;
    private UI ui = UI.getCurrent();
    private Div container;
    private Integer[] array;
    public Sleep_Node(AST_Node expr) {
        expression = expr;
    }

    @Override
    public Integer value(Memory memory) {
        // should not be called
        return null;
    }

    @Override
    public void execute(Memory memory) {
        try {
            Thread.sleep(expression.value(memory));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
