package com.example.application.entities;
import com.example.application.entities.AlgorithmTestResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ATRRepository extends JpaRepository<AlgorithmTestResult, Long>{

    @Query("SELECT atr FROM AlgorithmTestResult atr WHERE atr.algorithmName = :algorithmName ORDER BY atr.timeTaken ASC")
    List<AlgorithmTestResult> findTopByAlgorithmNameOrderByExecutionTimeAsc( @Param("algorithmName") String algorithmName,
                                                                             Pageable pageable);

    @Query("SELECT a.algorithmName, MIN(a.timeTaken) FROM AlgorithmTestResult a " +
            "WHERE a.arrayLength < :maxLength GROUP BY a.algorithmName " +
            "ORDER BY MIN(a.timeTaken) ASC")
    List<Object[]> findFastestAlgorithms(@Param("maxLength") int maxLength, Pageable pageable);

    @Query("SELECT a.algorithmName, COUNT(a) as usageCount FROM AlgorithmTestResult a " +
            "GROUP BY a.algorithmName " +
            "ORDER BY COUNT(a) DESC")
    List<Object[]> findMostUsedAlgorithms(Pageable pageable);

}
