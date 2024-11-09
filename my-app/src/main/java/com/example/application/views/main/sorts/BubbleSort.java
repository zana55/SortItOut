package com.example.application.views.main.sorts;

import com.example.application.views.main.sorts.SortAlgorithm;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;

import java.util.concurrent.CountDownLatch;

import static com.example.application.views.main.HelperFunctions.createBars;

public class BubbleSort<T extends Comparable<T>> implements SortAlgorithm<T> {

    private static final int ANIMATION_DELAY = 130; // Milliseconds
    private boolean visualize;
    private boolean descending;
    private Div container;

    public BubbleSort(boolean visualize, Div container, boolean descending) {
        this.visualize = visualize;
        this.descending = descending;
        this.container = container;
    }

    @Override
    public void sort(T[] array, CountDownLatch latch) {
        if (visualize && container != null) {
            visualSort(array, latch);
        } else {
            normalSort(array);
        }
    }

    private void normalSort(T[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if ((descending && array[j].compareTo(array[j + 1]) < 0) ||
                        (!descending && array[j].compareTo(array[j + 1]) > 0)) {
                    swap(array, j, j + 1);
                }
            }
        }
    }

    private void visualSort(T[] array, CountDownLatch latch) {
        UI currentUI = UI.getCurrent();
        new Thread(() -> {
            int n = array.length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if ((descending && array[j].compareTo(array[j + 1]) < 0) ||
                            (!descending && array[j].compareTo(array[j + 1]) > 0)) {
                        swap(array, j, j + 1);
                        visual_swap(array, currentUI);
                        try {
                            Thread.sleep(ANIMATION_DELAY);
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                    }
                }
            }
            latch.countDown();
        }).start();
    }

    private void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    private void visual_swap(T[] array, UI ui){
        if (ui != null) {
            ui.access(() -> {
                createBars(container, (Integer[]) array);
            });
        }
    }

}
