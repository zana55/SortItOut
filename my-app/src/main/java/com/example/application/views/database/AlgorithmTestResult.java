package com.example.application.views.database;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AlgorithmTestResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String algorithmName;
    private int arrayLength;
    private double timeTaken;

    public AlgorithmTestResult() {}

    public AlgorithmTestResult(String algorithmName, int arrayLength, double timeTaken) {
        this.algorithmName = algorithmName;
        this.arrayLength = arrayLength;
        this.timeTaken = timeTaken;
    }

    public AlgorithmTestResult(int arrayLength, double timeTaken) {
        this.arrayLength = arrayLength;
        this.timeTaken = timeTaken;
    }

    public AlgorithmTestResult(String algorithmName, double timeTaken) {
        this.algorithmName = algorithmName;
        this.timeTaken = timeTaken;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAlgorithmName() {
        return algorithmName;
    }

    public void setAlgorithmName(String algorithmName) {
        this.algorithmName = algorithmName;
    }

    public int getArrayLength() {
        return arrayLength;
    }

    public void setArrayLength(int arrayLength) {
        this.arrayLength = arrayLength;
    }

    public double getTimeTaken() {
        return timeTaken;
    }

    public void setTimeTaken(double timeTaken) {
        this.timeTaken = timeTaken;
    }
}