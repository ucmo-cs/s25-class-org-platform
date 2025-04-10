package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.repository.ClassRepository;

import com.senior_project.senior_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ClassService {
    final private ClassRepository classRepository;
    final private UserRepository userRepository;

    @Autowired
    public ClassService(ClassRepository classRepository, UserRepository userRepository) {
        this.classRepository = classRepository;
        this.userRepository = userRepository;
    }

    public List<Class> getAllClasses() {
        return this.classRepository.findAll();
    }
  
    public Class getClass(int id) {
        Optional<Class> out = classRepository.findById(id);

        if(out.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        return out.get();
    }

    public void addClass(Class in) {
        if(classRepository.findById(in.getClassID()).isPresent()) {
            throw new IllegalArgumentException("Class already exists");
        }
        if(in.getUser() == null) {
            throw new IllegalArgumentException("User must be added");
        }
        if(userRepository.findById(in.getUser().getUserID()).isEmpty()) {
            throw new IllegalArgumentException(("User must exist"));
        }

        classRepository.save(in);
    }

    public void deleteClass(int id) {
        if(classRepository.findById(id).isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }

        classRepository.deleteById(id);
    }

    @Transactional
    public void modifyClass(Class in) {
        Optional<Class> editingClass = classRepository.findById(in.getClassID());
        if(editingClass.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist");
        }
        if(in.getUser() == null) {
            throw new IllegalArgumentException("User must be added");
        }
        if(userRepository.findById(in.getUser().getUserID()).isEmpty()) {
            throw new IllegalArgumentException(("User must exist"));
        }

        editingClass.get().setName(in.getName());
        editingClass.get().setSemester(in.getSemester());
        editingClass.get().setMeetingLocation(in.getMeetingLocation());
        editingClass.get().setMeetingTimes(in.getMeetingTimes());
        editingClass.get().setInstructor(in.getInstructor());
        editingClass.get().setDescription(in.getDescription());
        editingClass.get().setOfficeHours(in.getOfficeHours());
        editingClass.get().setInstructorPhone(in.getInstructorPhone());
        editingClass.get().setInstructorEmail(in.getInstructorEmail());
        editingClass.get().setTextbook(in.getTextbook());
        editingClass.get().setStartDate(in.getStartDate());
        editingClass.get().setEndDate(in.getEndDate());
    }
}
