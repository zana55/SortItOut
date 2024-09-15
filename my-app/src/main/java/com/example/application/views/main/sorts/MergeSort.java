package com.example.application.views.main.sorts;

import com.example.application.views.main.sorts.SortAlgorithm;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;

import java.util.concurrent.CountDownLatch;

import static com.example.application.views.main.HelperFunctions.createBars;

public class MergeSort<T extends Comparable<T>> implements SortAlgorithm<T> {

    private static final int ANIMATION_DELAY = 100; // Milliseconds
    private boolean visualize;
    private Div container;

    public MergeSort(boolean visualize, Div container) {
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
        if (array.length < 2) {
            return; // An array of size 0 or 1 is already sorted
        }
        T[] tempArray = array.clone(); // Temporary array to hold the sorted elements
        mergeSort(array, tempArray, 0, array.length - 1);
    }

    public void visualSort(T[] array, CountDownLatch latch) {
        if (array.length < 2) {
            return; // An array of size 0 or 1 is already sorted
        }
        UI currentUI = UI.getCurrent();
        new Thread(() -> {
            T[] tempArray = array.clone(); // Temporary array to hold the sorted elements
            visualMergeSort(array, tempArray, 0, array.length - 1, currentUI);
            latch.countDown(); // Signal that this thread is finished
        }).start();
    }

    private void mergeSort(T[] array, T[] tempArray, int leftStart, int rightEnd) {
        if (leftStart >= rightEnd) {
            return; // Base case: a single element is always sorted
        }

        int middle = (leftStart + rightEnd) / 2;
        mergeSort(array, tempArray, leftStart, middle); // Sort left half
        mergeSort(array, tempArray, middle + 1, rightEnd); // Sort right half
        merge(array, tempArray, leftStart, middle, rightEnd); // Merge both halves
    }

    private void visualMergeSort(T[] array, T[] tempArray, int leftStart, int rightEnd, UI currentUI) {
        if (leftStart >= rightEnd) {
            return; // Base case: a single element is always sorted
        }

        int middle = (leftStart + rightEnd) / 2;
        visualMergeSort(array, tempArray, leftStart, middle, currentUI); // Sort left half
        visualMergeSort(array, tempArray, middle + 1, rightEnd, currentUI); // Sort right half
        visualMerge(array, tempArray, leftStart, middle, rightEnd, currentUI); // Merge both halves
    }

    private void merge(T[] array, T[] tempArray, int leftStart, int middle, int rightEnd) {
        // Copy both halves into a temporary array
        System.arraycopy(array, leftStart, tempArray, leftStart, rightEnd - leftStart + 1);

        int left = leftStart;
        int right = middle + 1;
        int current = leftStart;
        while (left <= middle && right <= rightEnd) {
            if (tempArray[left].compareTo(tempArray[right]) <= 0) {
                array[current] = tempArray[left];
                left++;
            } else {
                array[current] = tempArray[right];
                right++;
            }
            current++;
        }
        // Copy any remaining elements from the left half
        System.arraycopy(tempArray, left, array, current, middle - left + 1);
    }

    private void visualMerge(T[] array, T[] tempArray, int leftStart, int middle, int rightEnd, UI currentUI) {
        // Copy both halves into a temporary array
        System.arraycopy(array, leftStart, tempArray, leftStart, rightEnd - leftStart + 1);

        int left = leftStart;
        int right = middle + 1;
        int current = leftStart;

        while (left <= middle && right <= rightEnd) {
            if (tempArray[left].compareTo(tempArray[right]) <= 0) {
                array[current] = tempArray[left]; // tu se treba crtati visual swap
                visual_swap(array, currentUI);
                try {
                    Thread.sleep(ANIMATION_DELAY);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                left++;
            } else {
                array[current] = tempArray[right];
                visual_swap(array, currentUI);
                try {
                    Thread.sleep(ANIMATION_DELAY);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                right++;
            }
            current++;
        }

        while (left <= middle) {
            array[current] = tempArray[left];
            visual_swap(array, currentUI);
            try {
                Thread.sleep(ANIMATION_DELAY);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            left++;
            current++;
        }

        while (right <= rightEnd) {
            array[current] = tempArray[right];
            visual_swap(array, currentUI);
            try {
                Thread.sleep(ANIMATION_DELAY);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            right++;
            current++;
        }
    }

    private void visual_swap(T[] array, UI ui){
        if (ui != null) {
            ui.access(() -> {
                createBars(container, (Integer[]) array);
            });
        }
    }
}
