package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.Semester;
import com.senior_project.senior_project.repository.SemesterRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SemesterService {
    final private SemesterRepository semesterRepository;

    @Autowired
    public SemesterService(SemesterRepository semesterRepository) {
        this.semesterRepository = semesterRepository;
    }

    public List<Semester> findAll() {
        return semesterRepository.findAll();
    }

    public Semester findById(int semesterId) {
        Optional<Semester> semester = semesterRepository.findById(semesterId);
        if(semester.isEmpty()) {
            throw new IllegalArgumentException("Semester does not exist.");
        }
        return semester.get();
    }

    public Semester findByName(String semesterName) {
        Optional<Semester> semester = semesterRepository.findBySemesterName(semesterName);
        if(semester.isEmpty()) {
            throw new IllegalArgumentException("Semester does not exist.");
        }
        return semester.get();
    }

    public void addNewSemester(Semester semester) {
        if(semesterRepository.findBySemesterName(semester.getSemesterName()).isPresent()) {
            throw new IllegalArgumentException("Semester already exists.");
        }
        semesterRepository.save(semester);
    }

    public void deleteSemester(int semesterID) {
        if(semesterRepository.findById(semesterID).isEmpty()) {
            throw new IllegalArgumentException("Semester doesn't exist.");
        }
        semesterRepository.deleteById(semesterID);
    }

    @Transactional
    public void updateSemester(int semesterID, String semesterName) {
        Optional<Semester> semester = semesterRepository.findById(semesterID);
        if(semester.isEmpty()) {
            throw new IllegalArgumentException("Semester doesn't exist");
        }

        if(semesterName != null && !semesterName.equals(semester.get().getSemesterName())) {
            semester.get().setSemesterName(semesterName);
        }
    }


}
