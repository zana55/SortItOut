package com.example.application.views.main.sorts;

import com.example.application.views.main.sorts.SortAlgorithm;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;

import java.util.concurrent.CountDownLatch;

import static com.example.application.views.main.HelperFunctions.createBars;

public class SelectionSort<T extends Comparable<T>> implements SortAlgorithm<T> {

    private static final int ANIMATION_DELAY = 130;
    private boolean visualize;
    private boolean descending;
    private Div container;

    public SelectionSort(boolean visualize, Div container, boolean descending) {
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

    public void normalSort(T[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            int targetIndex = i;
            for (int j = i + 1; j < n; j++) {
                if ((descending && array[j].compareTo(array[targetIndex]) > 0) ||
                        (!descending && array[j].compareTo(array[targetIndex]) < 0)) {
                    targetIndex = j;
                }
            }
            swap(array, targetIndex, i);
        }
    }

    public void visualSort(T[] array, CountDownLatch latch) {
        UI currentUI = UI.getCurrent();
        new Thread(() -> {
            int n = array.length;
            for (int i = 0; i < n - 1; i++) {
                int targetIndex = i;
                for (int j = i + 1; j < n; j++) {
                    if ((descending && array[j].compareTo(array[targetIndex]) > 0) ||
                            (!descending && array[j].compareTo(array[targetIndex]) < 0)) {
                        targetIndex = j;
                    }
                }
                swap(array, targetIndex, i);
                visual_swap(array, currentUI);
                try {
                    Thread.sleep(ANIMATION_DELAY);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
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
