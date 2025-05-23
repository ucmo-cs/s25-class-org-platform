package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.model.Event;
import com.senior_project.senior_project.model.User;
import com.senior_project.senior_project.repository.ClassRepository;
import com.senior_project.senior_project.repository.EventRepository;
import com.senior_project.senior_project.repository.FileRepository;
import com.senior_project.senior_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final ClassRepository classRepository;
    private final FileRepository fileRepository;

    @Autowired
    public EventService(EventRepository eventRepository, UserRepository userRepository, ClassRepository classRepository, FileRepository fileRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.classRepository = classRepository;
        this.fileRepository = fileRepository;
    }

    public Event getEventByID(int eventID) {
        Optional<Event> event = this.eventRepository.findById(eventID);
        if(event.isEmpty()) {
            throw new IllegalArgumentException("Event does note exist.");
        }
        return event.get();
    }

    public List<Event> getEventsByUser(int userID) {
        Optional<User> user = this.userRepository.findById(userID);
        if(user.isEmpty()) {
            throw new IllegalArgumentException("User ID is invalid");
        }
        return eventRepository.findAllByUser(user.get());
    }

    public List<Event> getEventsByUserAndIsFavorite(int userID, Boolean isFavorite) {
        Optional<User> user = this.userRepository.findById(userID);
        if(user.isEmpty()) {
            throw new IllegalArgumentException("User ID is invalid");
        }
        return eventRepository.findAllByUserAndIsFavorite(user.get(),isFavorite);
    }

    public List<Event> getEventsByClass(int classID) {
        Optional<Class> classToFindBy = this.classRepository.findById(classID);
        if(classToFindBy.isEmpty()) {
            throw new IllegalArgumentException("Class ID is invalid");
        }
        return eventRepository.findAllByClassID(classToFindBy.get());
    }

    public List<Event> getEventsByClassAndIsFavorite(int classID, Boolean isFavorite) {
        Optional<Class> classToFindBy = this.classRepository.findById(classID);
        if(classToFindBy.isEmpty()) {
            throw new IllegalArgumentException("Class ID is invalid");
        }
        return eventRepository.findAllByClassIDAndIsFavorite(classToFindBy.get(), isFavorite);
    }

    public void addNewEvent(Event event) {
        System.out.println(event);
        if(this.eventRepository.findById(event.getEventID()).isPresent()) {
            throw new IllegalArgumentException("Event already exists");
        }

        if(this.userRepository.findById(event.getUser().getUserID()).isEmpty()) {
            throw new IllegalArgumentException("An existing user must be specified.");
        }

        if(event.getClassID().getClassID() != 0 && this.classRepository.findById(event.getClassID().getClassID()).isEmpty()) {
            throw new IllegalArgumentException("An existing class, or no class must be specified.");
        }
        System.out.println(event);
        this.eventRepository.save(event);
    }

    public void deleteEvent(int eventID) {
        Optional<Event> event = this.eventRepository.findById(eventID);
        if(event.isEmpty()) {
            throw new IllegalArgumentException("Event does not exist.");
        }
        Integer fileID = event.get().getFile();
        this.eventRepository.deleteById(event.get().getEventID());
        if(fileID != null) {
            this.fileRepository.deleteById(fileID);
        }
    }

    public void deleteEventsByUser(int userID) {
        Optional<User> user = this.userRepository.findById(userID);
        if(user.isEmpty()) {
            throw new IllegalArgumentException("The specified user does not exist.");
        }
        List<Event> events = this.eventRepository.findAllByUser(user.get());
        for(Event event: events) {
            Integer fileID = event.getFile();
            this.eventRepository.deleteById(event.getEventID());
            if(fileID != null) {
                this.fileRepository.deleteById(fileID);
            }
        }
    }

    public void deleteEventsByClass(int classID) {
        Optional<Class> class_ = this.classRepository.findById(classID);
        if(class_.isEmpty()) {
            throw new IllegalArgumentException("The specified class does not exist.");
        }
        List<Event> events = this.eventRepository.findAllByClassID(class_.get());
        for(Event event: events) {
            if(event.getFile() != null) {
                this.fileRepository.deleteById(event.getFile());
            }
            this.eventRepository.deleteById(event.getEventID());
        }
    }

    @Transactional
    public void updateEvent(Event event) {
        Optional<Event> updatingEvent = eventRepository.findById(event.getEventID());
        if(updatingEvent.isEmpty()) {
            throw new IllegalArgumentException("Event does not exist.");
        }

        if(event.getClassID() != null && event.getClassID().getClassID() != 0 && this.classRepository.findById(event.getClassID().getClassID()).isEmpty()) {
            throw new IllegalArgumentException("An existing class, or no class must be specified.");
        }

        updatingEvent.get().setName(event.getName());
        updatingEvent.get().setDescription(event.getDescription());
        updatingEvent.get().setStart(event.getStart());
        updatingEvent.get().setEnd(event.getEnd());
        updatingEvent.get().setClassID(event.getClassID());
        updatingEvent.get().setIsHomework(event.getIsHomework());
        updatingEvent.get().setFile(event.getFile());
        updatingEvent.get().setIsFavorite(event.getIsFavorite());
    }

}
