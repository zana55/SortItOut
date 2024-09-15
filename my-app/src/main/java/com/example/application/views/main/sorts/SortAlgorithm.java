package com.example.application.views.main.sorts;

import java.util.Comparator;
import java.util.concurrent.CountDownLatch;

public interface SortAlgorithm<T extends Comparable<T>> {
    /**
     * Sorts the input array in place.
     *
     * @param array The array to be sorted.
     */
    void sort(T[] array, CountDownLatch latch);

}
