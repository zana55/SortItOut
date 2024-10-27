package com.example.application.entities;

import jakarta.persistence.*;

@Entity
public class CustomAlgorithm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "algorithm_name")
    private String algorithmName;

    @Column(name = "algorithm_code", length = 5000)
    private String algorithmCode;

    public CustomAlgorithm() {}

    public CustomAlgorithm(String algorithmName, String algorithmCode) {
        this.algorithmName = algorithmName;
        this.algorithmCode = algorithmCode;
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

    public String getAlgorithmCode() {
        return algorithmCode;
    }

    public void setAlgorithmCode(String algorithmCode) {
        this.algorithmCode = algorithmCode;
    }
}