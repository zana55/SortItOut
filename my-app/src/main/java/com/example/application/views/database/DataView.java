package com.example.application.views.database;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@PageTitle("Statistics for algorithms")
@Route(value = "stats", layout = MainLayout.class)
public class DataView extends VerticalLayout {
    @Autowired
    private ATRService algorithmTestResultService;
    public TextField inputFieldFast;
    public TextField inputFieldNumber;
    public Notification notification;
    Grid<AlgorithmTestResult> gridFast = new Grid<>(AlgorithmTestResult.class);
    Grid<AlgorithmTestResult> gridAlgorithm = new Grid<>(AlgorithmTestResult.class);
    Grid<AlgorithmUsage> gridPopular = new Grid<>();

    public DataView() {
        H4 f5 = new H4("Find the most popular algorithms");
        f5.getStyle().set("margin-left", "10px");
        add(f5);

        Span f6 = new Span("Find the top three algorithms other users used the most.");
        f6.getStyle().set("margin-left", "10px");
        f6.setWidth("60%");
        add(f6);

        Button searchButton3 = new Button("Search!", e -> findPopularAlgorithms());
        searchButton3.getStyle().set("margin-left", "10px");

        add(searchButton3);

        gridPopular.setVisible(false);
        gridPopular.addColumn(AlgorithmUsage::getAlgorithmName).setHeader("Algorithm Name");
        gridPopular.addColumn(AlgorithmUsage::getUsageCount).setHeader("Usage Count");
        gridPopular.setWidth("40%");
        gridPopular.setHeight("250px");
        gridPopular.getStyle().set("margin-left", "10px");
        add(gridPopular);

        H4 f1 = new H4("Find the fastest execution times for a certain algorithm");
        f1.getStyle().set("margin-left", "10px");
        add(f1);

        Span f2 = new Span("Enter the name of the algorithm (e.g. \"Bubble Sort\") to find the execution times and the corresponding array lengths it sorted.");
        f2.getStyle().set("margin-left", "10px");
        f2.setWidth("60%");
        add(f2);

        inputFieldFast = new TextField("Enter the name here!");
        inputFieldFast.getStyle().set("margin-left", "10px");

        Button searchButton = new Button("Search!", e -> findFastestTimes());
        searchButton.getStyle().set("margin-left", "10px");

        add(inputFieldFast, searchButton);

        gridFast.setVisible(false);
        gridFast.setColumns("timeTaken", "arrayLength");
        gridFast.setWidth("40%");
        gridFast.setHeight("250px");
        gridFast.getStyle().set("margin-left", "10px");
        add(gridFast);

        H4 f3 = new H4("Find fastest algorithms for an array of a certain length");
        f3.getStyle().set("margin-left", "10px");
        add(f3);

        Span f4 = new Span("Enter the maximum array length you want to consider to find the algorithms that had the shortest execution time for arrays of that length.");
        f4.getStyle().set("margin-left", "10px");
        f4.setWidth("60%");
        add(f4);

        inputFieldNumber = new TextField("Enter the number here!");
        inputFieldNumber.getStyle().set("margin-left", "10px");

        Button searchButton2 = new Button("Search!", e -> findFastestAlgorithms());
        searchButton2.getStyle().set("margin-left", "10px");

        add(inputFieldNumber, searchButton2);

        gridAlgorithm.setVisible(false);
        gridAlgorithm.setColumns("algorithmName", "timeTaken");
        gridAlgorithm.setWidth("40%");
        gridAlgorithm.setHeight("250px");
        gridAlgorithm.getStyle().set("margin-left", "10px");
        add(gridAlgorithm);
    }

    private void findFastestTimes()
    {
        String input = inputFieldFast.getValue();
        List<AlgorithmTestResult> results;
        if(input != null) {
            results = algorithmTestResultService.getFastestTimes(input, 5);
            gridFast.setItems(results);
            gridFast.setVisible(true);
        }
        else {
            notification = Notification.show("There is no algorithm with the given name!");
        }
    }

    private void findFastestAlgorithms()
    {
        String input = inputFieldNumber.getValue();
        int limit;

        List<AlgorithmTestResult> results;
        if(input != null) {
            limit = Integer.parseInt(input);
            results = algorithmTestResultService.getTopThreeFastestAlgorithms(limit);
            gridAlgorithm.setItems(results);
            gridAlgorithm.setVisible(true);
        }
        else {
            notification = Notification.show("There are no results for arrays of that size!");
        }
    }

    private void findPopularAlgorithms()
    {
        List<AlgorithmUsage> results;
        results = algorithmTestResultService.getTopThreeMostUsedAlgorithms();
        gridPopular.setItems(results);
        gridPopular.setVisible(true);
    }

}