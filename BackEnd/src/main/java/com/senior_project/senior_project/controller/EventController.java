package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.Event;
import com.senior_project.senior_project.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/byUser{id}")
    public List<Event> getEventsByUser(@PathVariable("id")int userID) {
        return this.eventService.getEventsByUser(userID);
    }

    @GetMapping("/byClass{id}")
    public List<Event> getEventsByClass(@PathVariable("id")int classID) {
        return this.eventService.getEventsByClass(classID);
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
