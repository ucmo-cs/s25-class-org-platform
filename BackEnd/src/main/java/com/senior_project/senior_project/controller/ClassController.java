package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("http://localhost:5173")
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
    @GetMapping("/{id}")
    public Class getClass(@PathVariable("id")int id) {
        return classService.getClass(id);
    }

    @GetMapping("/byUser{id}")
    public List<Class> getClassesByUser(@PathVariable("id") int id) {
        return classService.getAllByUser(id);
    }

    @GetMapping("/getByClassandSemester")
    public List<Class> getAllClassesByUserAndSemester(@Param("userID")int userID, @Param("semesterID")int semesterID) {
        return classService.getClassByUserAndSemester(userID, semesterID);
    }

    @PostMapping("/")
    public void addClass(@RequestBody Class in) {
        classService.addClass(in);
    }

    @DeleteMapping("/{id}")
    public void deleteClass(@PathVariable("id")int id) {
        classService.deleteClass(id);
    }

    @PutMapping("/")
    public void modifyClass(@RequestBody Class in) {
        System.out.println(in);
        classService.modifyClass(in);
    }

}
