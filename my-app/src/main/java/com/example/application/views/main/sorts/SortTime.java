package com.example.application.views.main.sorts;

public class SortTime {
    private String sortAlgorithm;
    private double executionTime;

    public SortTime(String name, double time)
    {
        this.sortAlgorithm = name;
        this.executionTime = time;
    }

    public void setName(String name)
    {
        this.sortAlgorithm = name;
    }

    public void setTime(double time)
    {
        this.executionTime = time;
    }

    public String getSortAlgorithm()
    {
        return sortAlgorithm;
    }

    public double getExecutionTime()
    {
        return executionTime;
    }
}
