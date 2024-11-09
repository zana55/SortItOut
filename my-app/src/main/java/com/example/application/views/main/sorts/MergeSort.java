package com.example.application.views.main.sorts;

import com.example.application.views.main.sorts.SortAlgorithm;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.html.Div;

import java.util.concurrent.CountDownLatch;

import static com.example.application.views.main.HelperFunctions.createBars;

public class MergeSort<T extends Comparable<T>> implements SortAlgorithm<T> {

    private static final int ANIMATION_DELAY = 130;
    private boolean visualize;
    private boolean descending;
    private Div container;

    public MergeSort(boolean visualize, Div container, boolean descending) {
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
        if (array.length < 2) {
            return;
        }
        T[] tempArray = array.clone();
        mergeSort(array, tempArray, 0, array.length - 1);
    }

    public void visualSort(T[] array, CountDownLatch latch) {
        if (array.length < 2) {
            return;
        }
        UI currentUI = UI.getCurrent();
        new Thread(() -> {
            T[] tempArray = array.clone();
            visualMergeSort(array, tempArray, 0, array.length - 1, currentUI);
            latch.countDown();
        }).start();
    }

    private void mergeSort(T[] array, T[] tempArray, int leftStart, int rightEnd) {
        if (leftStart >= rightEnd) {
            return;
        }

        int middle = (leftStart + rightEnd) / 2;
        mergeSort(array, tempArray, leftStart, middle);
        mergeSort(array, tempArray, middle + 1, rightEnd);
        merge(array, tempArray, leftStart, middle, rightEnd);
    }

    private void visualMergeSort(T[] array, T[] tempArray, int leftStart, int rightEnd, UI currentUI) {
        if (leftStart >= rightEnd) {
            return;
        }

        int middle = (leftStart + rightEnd) / 2;
        visualMergeSort(array, tempArray, leftStart, middle, currentUI);
        visualMergeSort(array, tempArray, middle + 1, rightEnd, currentUI);
        visualMerge(array, tempArray, leftStart, middle, rightEnd, currentUI);
    }

    private void merge(T[] array, T[] tempArray, int leftStart, int middle, int rightEnd) {
        System.arraycopy(array, leftStart, tempArray, leftStart, rightEnd - leftStart + 1);

        int left = leftStart;
        int right = middle + 1;
        int current = leftStart;
        while (left <= middle && right <= rightEnd) {
            if ((descending && tempArray[left].compareTo(tempArray[right]) > 0) ||
                    (!descending && tempArray[left].compareTo(tempArray[right]) <= 0)) {
                array[current] = tempArray[left];
                left++;
            } else {
                array[current] = tempArray[right];
                right++;
            }
            current++;
        }

        System.arraycopy(tempArray, left, array, current, middle - left + 1);
    }

    private void visualMerge(T[] array, T[] tempArray, int leftStart, int middle, int rightEnd, UI currentUI) {
        System.arraycopy(array, leftStart, tempArray, leftStart, rightEnd - leftStart + 1);

        int left = leftStart;
        int right = middle + 1;
        int current = leftStart;

        while (left <= middle && right <= rightEnd) {
            if ((descending && tempArray[left].compareTo(tempArray[right]) > 0) ||
                    (!descending && tempArray[left].compareTo(tempArray[right]) <= 0)) {
                array[current] = tempArray[left];
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
