package com.senior_project.senior_project.repository;

import com.senior_project.senior_project.model.Semester;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SemesterRepository extends JpaRepository<Semester,Integer> {
    Optional<Semester> findBySemesterName(String semesterName);
}
