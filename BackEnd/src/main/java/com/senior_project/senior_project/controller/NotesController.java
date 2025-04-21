package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.Notes;
import com.senior_project.senior_project.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping(path = "/notes")
public class NotesController {
    private final NotesService notesService;

    @Autowired
    public NotesController(NotesService notesService) {
        this.notesService = notesService;
    }

    @GetMapping("/{id}")
    public List<Notes> getNotesByClassID(@PathVariable("id") int classID) {
        return this.notesService.getNotesByClass(classID);
    }

    @PostMapping("/")
    public void addNewNotes(@RequestBody Notes notes) {
        this.notesService.addNewNotes(notes);
    }

    @DeleteMapping("/{id}")
    public void deleteNotes(@PathVariable("id") int notesID) {
        this.notesService.deleteNotes(notesID);
    }

    @PutMapping("/")
    public void updateNotes(@RequestBody Notes notes) {
        this.notesService.updateNotes(notes);
    }
}
