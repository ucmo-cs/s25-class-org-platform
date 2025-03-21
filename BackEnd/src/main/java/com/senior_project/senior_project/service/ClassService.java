package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassService {
    final private ClassRepository classRepository;

    @Autowired
    public ClassService(ClassRepository classRepository) {
        this.classRepository = classRepository;
    }

    public List<Class> getAllClasses() {
        return this.classRepository.findAll();
    }
}
