package com.example.application.views.main.sorts;

import com.example.application.views.main.sorts.*;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.concurrent.CountDownLatch;

import static com.example.application.views.main.HelperFunctions.createBars;

public class AnimatedSort<T extends Comparable<T>> extends VerticalLayout {
    private T[] numbers;
    private Div barsContainer;
    private Set<SortAlgorithm<T>> sorters = new LinkedHashSet<>();
    private Button startButton;
    public AnimatedSort(Set<String> selectedAlgorithms, T[] numbers) {
        this.numbers = numbers;

        for(String algorithm : selectedAlgorithms)
        {
            VerticalLayout group = new VerticalLayout();

            Span label = new Span(algorithm);
            label.getStyle().set("display", "block").set("text-align", "center");
            group.add(label);

            barsContainer = new Div();
            barsContainer.setText(algorithm);
            barsContainer.setWidth("100%");
            barsContainer.getStyle().set("display", "flex");
            barsContainer.getStyle().set("align-items", "flex-end");
            createBars(barsContainer, (Integer[]) numbers);
            group.add(barsContainer);

            add(group);

            sorters.add(getSorter(algorithm));
        }

        startButton = new Button("Start the animation!", e->sort());
        startButton.setEnabled(true);

        add(startButton);
    }

    private void sort(){
        UI ui = UI.getCurrent();

        startButton.setEnabled(false);

        CountDownLatch latch = new CountDownLatch(sorters.size());

        for(SortAlgorithm<T> sorter : sorters) {
            T[] numbersCopy = numbers.clone();
            sorter.sort(numbersCopy, latch);
        }
        new Thread(() -> {
            try {
                latch.await();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            } finally {
                if (ui != null) {
                    ui.access(() -> {
                        startButton.setEnabled(true);
                    });
                }
            }
        }).start();
    }

    private SortAlgorithm<T> getSorter(String algorithm)
    {
        return switch (algorithm) {
            case "Bubble Sort" -> new BubbleSort<>(true, barsContainer);
            case "Quick Sort" -> new QuickSort<>(true, barsContainer);
            case "Merge Sort" -> new MergeSort<>(true, barsContainer);
            case "Selection Sort" -> new SelectionSort<>(true, barsContainer);
            case "Insertion Sort" -> new InsertionSort<>(true, barsContainer);
            default -> null;
        };
    }
}
