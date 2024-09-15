package com.example.application.views.main.sorts;

import com.example.application.views.main.sorts.SortAlgorithm;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;

import java.util.concurrent.CountDownLatch;

import static com.example.application.views.main.HelperFunctions.createBars;

public class QuickSort<T extends Comparable<T>> implements SortAlgorithm<T> {
    private static final int ANIMATION_DELAY = 100; // Milliseconds
    private boolean visualize;
    private Div container;

    public QuickSort(boolean visualize, Div container) {
        this.visualize = visualize;
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
        quickSort(array, 0, array.length - 1);
    }

    public void visualSort(T[] array, CountDownLatch latch) {
        UI currentUI = UI.getCurrent();
        new Thread(() -> {
            visualQuickSort(array, 0, array.length - 1, currentUI);
            latch.countDown();
        }).start();
    }

    private void quickSort(T[] array, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(array, low, high);
            quickSort(array, low, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, high);
        }
    }

    private void visualQuickSort(T[] array, int low, int high, UI currentUI) {
        if (low < high) {
            int pivotIndex = visualPartition(array, low, high, currentUI);
            visualQuickSort(array, low, pivotIndex - 1, currentUI);
            visualQuickSort(array, pivotIndex + 1, high, currentUI);
        }
    }

    private int partition(T[] array, int low, int high) {
        T pivot = array[high]; // Choosing the last element as pivot
        int i = low - 1; // Pointer for the smaller element

        for (int j = low; j < high; j++) {
            if (array[j].compareTo(pivot) <= 0) {
                i++;
                // Swap elements at i and j
                swap(array, i, j);
            }
        }

        // Swap the pivot element with the element at i + 1
        swap(array, i + 1, high);
        return i + 1; // Return the partition index
    }

    private int visualPartition(T[] array, int low, int high, UI currentUI) {
        T pivot = array[high]; // Choosing the last element as pivot
        int i = low - 1; // Pointer for the smaller element

        for (int j = low; j < high; j++) {
            if (array[j].compareTo(pivot) <= 0) {
                i++;
                // Swap elements at i and j
                swap(array, i, j);
                visual_swap(array, currentUI);
                try {
                    Thread.sleep(ANIMATION_DELAY);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }

        // Swap the pivot element with the element at i + 1
        swap(array, i + 1, high);
        visual_swap(array, currentUI);
        try {
            Thread.sleep(ANIMATION_DELAY);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return i + 1; // Return the partition index
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
