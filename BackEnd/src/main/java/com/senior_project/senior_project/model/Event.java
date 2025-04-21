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

    @Column(name = "ishomework")
    private Boolean isHomework;

    @Column(name = "file")
    private Integer file;

    @Column(name = "isfavorite")
    private Boolean isFavorite;

    public Event() {
    }

    public Event(String name, String description, LocalDateTime start, LocalDateTime end, Class classID, User user, Boolean isHomework, Integer file, Boolean isFavorite) {
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.classID = classID;
        this.user = user;
        this.isHomework = isHomework;
        this.file = file;
        this.isFavorite = isFavorite;
    }

    public Event(int eventID, String name, String description, LocalDateTime start, LocalDateTime end, Class classID, User user, Boolean isHomework, Integer file, Boolean isFavorite) {
        this.eventID = eventID;
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.classID = classID;
        this.user = user;
        this.isHomework = isHomework;
        this.file = file;
        this.isFavorite = isFavorite;
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

    public Boolean isHomework() {
        return isHomework;
    }

    public void setHomework(Boolean homework) {
        isHomework = homework;
    }

    public Integer getFile() {
        return file;
    }

    public void setFile(Integer file) {
        this.file = file;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Boolean getFavorite() {
        return isFavorite;
    }

    public void setFavorite(Boolean favorite) {
        isFavorite = favorite;
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventID=" + eventID +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", start=" + start +
                ", end=" + end +
                ", classID=" + classID +
                ", user=" + user +
                ", isHomework=" + isHomework +
                ", file=" + file +
                ", isFavorite=" + isFavorite +
                '}';
    }
}
