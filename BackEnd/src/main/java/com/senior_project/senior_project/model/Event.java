package com.senior_project.senior_project.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "eventid")
    private int eventID;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "start")
    private LocalDateTime start;

    @Column(name = "end")
    private LocalDateTime end;

    @ManyToOne
    @JoinColumn(name = "classid")
    private Class classID;

    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    private User user;

    public Event() {
    }

    public Event(String name, String description, LocalDateTime start, LocalDateTime end, Class classID, User user) {
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.classID = classID;
        this.user = user;
    }

    public Event(int eventID, String name, String description, LocalDateTime start, LocalDateTime end, Class classID, User user) {
        this.eventID = eventID;
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.classID = classID;
        this.user = user;
    }

    public int getEventID() {
        return eventID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public Class getClassID() {
        return classID;
    }

    public void setClassID(Class classID) {
        this.classID = classID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
