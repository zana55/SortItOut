package com.example.application.services;
import com.example.application.entities.AlgorithmTestResult;
import com.example.application.entities.AlgorithmUsage;
import com.example.application.entities.ATRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ATRService {
    private final ATRRepository repository;

    @Autowired
    public ATRService(ATRRepository repository) {
        this.repository = repository;
    }

    public void saveTestResult(String algorithmName, int arrayLength, double timeTaken) {
        AlgorithmTestResult result = new AlgorithmTestResult(algorithmName, arrayLength, timeTaken);
        repository.save(result);
    }

    public List<AlgorithmTestResult> getFastestTimes(String algorithmName, int limit) {
        Pageable pageable = PageRequest.of(0, limit);
        List<AlgorithmTestResult> results = repository.findTopByAlgorithmNameOrderByExecutionTimeAsc(algorithmName, pageable);

        return results.stream()
                .map(result -> new AlgorithmTestResult(result.getArrayLength(), result.getTimeTaken()))
                .toList();
    }

    public List<AlgorithmTestResult> getTopThreeFastestAlgorithms(int maxLength) {
        Pageable pageable = PageRequest.of(0, 3);
        List<Object[]> results = repository.findFastestAlgorithms(maxLength, pageable);

        return results.stream()
                .map(result -> new AlgorithmTestResult((String) result[0], (double) result[1]))
                .collect(Collectors.toList());
    }

    public List<AlgorithmUsage> getTopThreeMostUsedAlgorithms() {
        Pageable pageable = PageRequest.of(0, 3);
        List<Object[]> results = repository.findMostUsedAlgorithms(pageable);

        return results.stream()
                .map(result -> new AlgorithmUsage((String) result[0], (Long) result[1]))
                .collect(Collectors.toList());
    }
}
