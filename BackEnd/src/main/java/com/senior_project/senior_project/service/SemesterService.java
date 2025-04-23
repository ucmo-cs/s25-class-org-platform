package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.model.Semester;
import com.senior_project.senior_project.model.User;
import com.senior_project.senior_project.repository.ClassRepository;
import com.senior_project.senior_project.repository.SemesterRepository;
import com.senior_project.senior_project.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SemesterService {
    final private SemesterRepository semesterRepository;
    final private ClassRepository classRepository;
    final private UserRepository userRepository;

    @Autowired
    public SemesterService(SemesterRepository semesterRepository, ClassRepository classRepository, UserRepository userRepository) {
        this.semesterRepository = semesterRepository;
        this.classRepository = classRepository;
        this.userRepository = userRepository;
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

    public List<Semester> findByUser(int userID) {
        Optional<User> user = userRepository.findById(userID);
        if(user.isEmpty()) {
            throw new IllegalArgumentException("User does note exist.");
        }
        List<Class> classes = classRepository.findAllByUser(user.get());
        List<Semester> semesters = new ArrayList<>();

        for(int i = 0; i < classes.size(); i++) {
            Semester semester = classes.get(i).getSemester();
            if(semester != null && !semesters.contains(semester)) {
                semesters.add(semester);
            }
        }

        return semesters;
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
