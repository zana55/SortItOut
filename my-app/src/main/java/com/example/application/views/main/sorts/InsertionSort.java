package com.example.application.views.main.sorts;

import com.example.application.views.main.sorts.SortAlgorithm;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;

import java.util.concurrent.CountDownLatch;

import static com.example.application.views.main.HelperFunctions.createBars;

public class InsertionSort <T extends Comparable<T>> implements SortAlgorithm<T> {

    private static final int ANIMATION_DELAY = 130;
    private boolean visualize;
    private boolean descending;
    private Div container;

    public InsertionSort(boolean visualize, Div container, boolean descending) {
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
        for (int i = 1; i < n; i++) {
            T key = array[i];
            int j = i - 1;

            while (j >= 0 && ((descending && array[j].compareTo(key) < 0) ||
                    (!descending && array[j].compareTo(key) > 0))) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }

    public void visualSort(T[] array, CountDownLatch latch) {
        UI currentUI = UI.getCurrent();
        new Thread(() -> {
            int n = array.length;
            for (int i = 1; i < n; i++) {
                T key = array[i];
                int j = i - 1;

                while (j >= 0 && ((descending && array[j].compareTo(key) < 0) ||
                        (!descending && array[j].compareTo(key) > 0))) {
                    swap(array, j);
                    visual_swap(array, currentUI);
                    try {
                        Thread.sleep(ANIMATION_DELAY);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                    j--;
                }
                array[j + 1] = key;
            }
            latch.countDown();
        }).start();
    }

    private void swap(T[] array, int j) {
        T temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }

    private void visual_swap(T[] array, UI ui){
        if (ui != null) {
            ui.access(() -> {
                createBars(container, (Integer[]) array);
            });
        }
    }
}
