package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.model.Notes;
import com.senior_project.senior_project.repository.ClassRepository;
import com.senior_project.senior_project.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class NotesService {
    private final NotesRepository notesRepository;
    private final ClassRepository classRepository;

    @Autowired
    public NotesService(NotesRepository notesRepository, ClassRepository classRepository) {
        this.notesRepository = notesRepository;
        this.classRepository = classRepository;
    }

    public List<Notes> getNotesByClass(int classID) {
        Optional<Class> classToSearchBy = classRepository.findById(classID);
        if(classToSearchBy.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        return notesRepository.findAllBy_class(classToSearchBy.get());
    }

    public void addNewNotes(Notes notes) {
        if(notesRepository.findById(notes.getNotesID()).isPresent()) {
            throw new IllegalArgumentException("Notes already exist.");
        }
        if(classRepository.findById(notes.get_class().getClassID()).isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        notesRepository.save(notes);
    }

    public void deleteNotes(int notesID) {
        if(notesRepository.findById(notesID).isEmpty()) {
            throw new IllegalArgumentException("Notes does not exist.");
        }
        notesRepository.deleteById(notesID);
    }

    @Transactional
    public void updateNotes(Notes notes) {
        Optional<Notes> notesToUpdate = notesRepository.findById(notes.getNotesID());
        if(notesToUpdate.isEmpty()) {
            throw new IllegalArgumentException("Notes does not exist.");
        }
        if(classRepository.findById(notesToUpdate.get().get_class().getClassID()).isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        notesToUpdate.get().set_class(notes.get_class());
        notesToUpdate.get().setDate(notes.getDate());
        notesToUpdate.get().setNotes(notes.getNotes());
    }
}
