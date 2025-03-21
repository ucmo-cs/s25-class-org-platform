package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/class")
public class ClassController {
    final private ClassService classService;

    @Autowired
    public ClassController (ClassService classService) {
        this.classService = classService;
    }

    @GetMapping("/all")
    public List<Class> getAllClasses() {
        return classService.getAllClasses();
    }
}
