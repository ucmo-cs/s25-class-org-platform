package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.model.Notes;
import com.senior_project.senior_project.repository.ClassRepository;
import com.senior_project.senior_project.repository.FileRepository;
import com.senior_project.senior_project.repository.NotesRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class NotesService {
    private final NotesRepository notesRepository;
    private final ClassRepository classRepository;
    private final FileService fileService;

    @Autowired
    public NotesService(NotesRepository notesRepository, ClassRepository classRepository, FileService fileService) {
        this.notesRepository = notesRepository;
        this.classRepository = classRepository;
        this.fileService = fileService;
    }

    public Notes getNotesByID(int notesID) {
        Optional<Notes> notes = notesRepository.findById(notesID);
        if(notes.isEmpty()) {
            throw new IllegalArgumentException("Notes does not exist.");
        }
        return notes.get();
    }

    public List<Notes> getNotesByClass(int classID) {
        Optional<Class> classToSearchBy = classRepository.findById(classID);
        if(classToSearchBy.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        return notesRepository.findAllBy_class(classToSearchBy.get());
    }

    public List<Notes> getNotesByClassAndFavorites(int classID, Boolean isFavorites) {
        Optional<Class> classToSearchBy = classRepository.findById(classID);
        if(classToSearchBy.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        return notesRepository.findAllBy_classAndIsFavorite(classToSearchBy.get(),isFavorites);
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
        Optional<Notes> notesToDelete = notesRepository.findById(notesID);
        if(notesToDelete.isEmpty()) {
            throw new IllegalArgumentException("Notes does not exist.");
        }
        System.out.println(notesToDelete);
        System.out.println(notesToDelete.get().getNotes());
        if(notesToDelete.get().getNotes() != null) {
            this.fileService.deleteFile(notesToDelete.get().getNotes());
        }
        notesRepository.deleteById(notesID);
    }

    public void deleteNotesByClass(int classID) {
        Optional<Class> class_ = classRepository.findById(classID);
        if(class_.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        List<Notes> notesToDelete = notesRepository.findAllBy_class(class_.get());

        for (Notes notes : notesToDelete) {
            if (notes.getNotes() != null) {
                this.fileService.deleteFile(notes.getNotes());
            }
            notesRepository.deleteById(notes.getNotesID());
        }
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
        notesToUpdate.get().setIsFavorite(notes.getIsFavorite());
    }
}
