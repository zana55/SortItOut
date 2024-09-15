package com.example.application.views.main;

import com.vaadin.flow.component.html.Div;

public class HelperFunctions<T extends Comparable<T>>
{
    public static <T extends Comparable<T>> void createBars(Div container, T[] numbers) {
        container.removeAll();
        Div[] bars = new Div[numbers.length];

        T max = findMaxValue(numbers);
        T min = findMinValue(numbers);
        int minHeight = 25;
        int maxHeight = 180;

        for (int i = 0; i < numbers.length; i++) {
            bars[i] = new Div();
            int normalizedHeight = normalizeHeight(numbers[i], min, max, minHeight, maxHeight);
            bars[i].setHeight(normalizedHeight + "px");
            bars[i].setWidth("15px");
            bars[i].getStyle().set("background-color", "purple");
            bars[i].getStyle().set("margin", "0 2px");
            container.add(bars[i]);
        }
    }

    public static <T extends Comparable<T>> T findMaxValue(T[] numbers) {
        T max = numbers[0];
        for (T number : numbers) {
            if (number.compareTo(max) > 0) {
                max = number;
            }
        }
        return max;
    }

    public static <T extends Comparable<T>> T findMinValue(T[] numbers) {
        T min = numbers[0];
        for (T number : numbers) {
            if (number.compareTo(min) < 0) {
                min = number;
            }
        }
        return min;
    }

    public static <T extends Comparable<T>> int normalizeHeight(T value, T min, T max, int minHeight, int maxHeight) {
        double valueDouble = ((Number) value).doubleValue();
        double minDouble = ((Number) min).doubleValue();
        double maxDouble = ((Number) max).doubleValue();

        return (int) ((valueDouble - minDouble) / (maxDouble - minDouble) * (maxHeight - minHeight) + minHeight);
    }
}
