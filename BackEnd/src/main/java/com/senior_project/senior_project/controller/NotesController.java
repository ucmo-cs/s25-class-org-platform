package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.Notes;
import com.senior_project.senior_project.service.NotesService;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
    public Notes getNotesById(@PathVariable("id") int notesID) {
        return this.notesService.getNotesByID(notesID);
    }

    @GetMapping("/class{id}")
    public List<Notes> getNotesByClassID(@PathVariable("id") int classID) {
        return this.notesService.getNotesByClass(classID);
    }

    @GetMapping("/isFavorite{id}")
    public List<Notes> getNotesByClassIDAndIsFavorite(@PathVariable("id")int classID, @Param("IsFavorite")Boolean isFavorite) {
        return this.notesService.getNotesByClassAndFavorites(classID, isFavorite);
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
