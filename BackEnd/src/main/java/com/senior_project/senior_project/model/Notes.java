package com.senior_project.senior_project.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "notes")
public class Notes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notesid")
    private int notesID;

    @ManyToOne
    @JoinColumn(name = "classID", nullable = false)
    private Class _class;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "notes")
    private Integer notes;

    public Notes() {
    }

    public Notes(Class _class, LocalDate date, Integer notes) {
        this._class = _class;
        this.date = date;
        this.notes = notes;
    }

    public Notes(int notesID, Class _class, LocalDate date, Integer notes) {
        this.notesID = notesID;
        this._class = _class;
        this.date = date;
        this.notes = notes;
    }

    public int getNotesID() {
        return notesID;
    }

    public Class get_class() {
        return _class;
    }

    public void set_class(Class _class) {
        this._class = _class;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getNotes() {
        return notes;
    }

    public void setNotes(Integer notes) {
        this.notes = notes;
    }
}
