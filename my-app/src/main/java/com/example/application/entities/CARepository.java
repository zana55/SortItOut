package com.example.application.entities;

import com.example.application.entities.CustomAlgorithm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CARepository extends JpaRepository<CustomAlgorithm, Long> {

    @Query("SELECT c.algorithmName FROM CustomAlgorithm c")
    List<String> findAllAlgorithmNames();

    @Query("SELECT c.algorithmCode FROM CustomAlgorithm c WHERE c.algorithmName = ?1")
    Optional<String> findAlgorithmCodeByName(String algorithmName);
}