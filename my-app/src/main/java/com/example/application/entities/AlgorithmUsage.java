package com.example.application.entities;

public class AlgorithmUsage {
    private String algorithmName;
    private Long usageCount;

    public AlgorithmUsage(String algorithmName, Long usageCount) {
        this.algorithmName = algorithmName;
        this.usageCount = usageCount;
    }

    public String getAlgorithmName() {
        return algorithmName;
    }

    public Long getUsageCount() {
        return usageCount;
    }

    public void setAlgorithmName(String algorithmName1)
    {
        algorithmName = algorithmName1;
    }

    public void setUsageCount(Long count)
    {
        usageCount = count;
    }
}
