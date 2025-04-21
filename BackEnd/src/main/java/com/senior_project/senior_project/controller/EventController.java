package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.Event;
import com.senior_project.senior_project.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/event")
public class EventController {
    private final EventService  eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/{id}")
    public Event getEventByID(@PathVariable("id")int eventID) {
        return this.eventService.getEventByID(eventID);
    }

    @GetMapping("/byUser{id}")
    public List<Event> getEventsByUser(@PathVariable("id")int userID) {
        return this.eventService.getEventsByUser(userID);
    }

    @GetMapping("/byUserAndFavorite{id}")
    public List<Event> getEventByUserAndIsFavorite(@PathVariable("id")int userID, @Param("isFavorite")Boolean isFavorite) {
        return this.eventService.getEventsByUserAndIsFavorite(userID, isFavorite);
    }

    @GetMapping("/byClass{id}")
    public List<Event> getEventsByClass(@PathVariable("id")int classID) {
        return this.eventService.getEventsByClass(classID);
    }

    @GetMapping("/byClassAndFavorite{id}")
    public List<Event> getEventByClassAndIsFavorite(@PathVariable("id")int classID, @Param("isFavorite")Boolean isFavorite) {
        return this.eventService.getEventsByClassAndIsFavorite(classID, isFavorite);
    }

    @PostMapping("/")
    public void addEvent(@RequestBody Event event) {
        this.eventService.addNewEvent(event);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable("id")int eventID) {
        this.eventService.deleteEvent(eventID);
    }

    @PutMapping("/")
    public void updateEvent(@RequestBody Event event) {
        this.eventService.updateEvent(event);
    }
}
