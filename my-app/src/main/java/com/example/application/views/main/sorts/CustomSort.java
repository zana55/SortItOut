package com.example.application.views.main.sorts;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import static com.example.application.views.main.HelperFunctions.createBars;

public class CustomSort extends VerticalLayout {
    private Integer[] numbers;
    private Div barsContainer;

    public CustomSort(Integer[] array)
    {
        numbers = array;
        VerticalLayout group = new VerticalLayout();

        Span label = new Span("Custom algorithm");
        label.getStyle().set("display", "block").set("text-align", "center");
        group.add(label);

        barsContainer = new Div();
        barsContainer.setText("Custom algorithm");
        barsContainer.setWidth("100%");
        barsContainer.getStyle().set("display", "flex");
        barsContainer.getStyle().set("align-items", "flex-end");
        createBars(barsContainer, numbers);
        group.add(barsContainer);

        add(group);
    }

    public void start(Integer[] currentArray, UI currentUI)
    {
        Integer[] arrayCopy = currentArray.clone();
        if(currentUI == null)
            System.out.println("Hey");
        if (currentUI != null) {
            currentUI.access(() -> {
                createBars(barsContainer, arrayCopy);
            });
        }
    }
}
