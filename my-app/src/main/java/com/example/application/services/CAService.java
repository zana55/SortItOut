package com.example.application.services;

import com.example.application.entities.CustomAlgorithm;
import com.example.application.entities.CARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CAService {
    private final CARepository repository;

    @Autowired
    public CAService(CARepository repository) {
        this.repository = repository;
    }

    public CustomAlgorithm saveCustomAlgorithm(String name, String code) {
        CustomAlgorithm customAlgorithm = new CustomAlgorithm(name, code);
        return repository.save(customAlgorithm);
    }

    public List<String> getAllCustomAlgorithmNames() {
        return repository.findAllAlgorithmNames();
    }

    public Optional<String> getAlgorithmCodeByName(String algorithmName) {
        return repository.findAlgorithmCodeByName(algorithmName);
    }

    public List<CustomAlgorithm> getAllCustomAlgorithms() {
        return repository.findAll();
    }

    public void deleteCustomAlgorithm(Long id) {
        repository.deleteById(id);
    }
}
