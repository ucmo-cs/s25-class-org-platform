package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.Semester;
import com.senior_project.senior_project.repository.SemesterRepository;
import com.senior_project.senior_project.service.SemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="semester")
public class SemesterController {
    final private SemesterService semesterService;

    @Autowired
    public SemesterController(SemesterService semesterService) {
        this.semesterService = semesterService;
    }
    @GetMapping("/all")
    public List<Semester> getAllSemesters() {
        return semesterService.findAll();
    }

    @GetMapping("/byID{id}")
    public Semester getSemester(@PathVariable("id")int semesterID) {
        return semesterService.findById(semesterID);
    }

    @GetMapping("/byName{name}")
    public Semester getSemesterByName(@PathVariable("name")String semesterName) {
        return semesterService.findByName(semesterName);
    }

    @PostMapping("/")
    public void addNewSemester(@RequestBody Semester semester) {
        semesterService.addNewSemester(semester);
    }

    @DeleteMapping("/{id}")
    public void deleteSemester(@PathVariable("id") int semesterID) {
        semesterService.deleteSemester(semesterID);
    }

    @PutMapping("/{id}")
    public void updateSemester(@PathVariable("id") int semesterID, @RequestParam(required = false) String semesterName) {
        semesterService.updateSemester(semesterID, semesterName);
    }
}
