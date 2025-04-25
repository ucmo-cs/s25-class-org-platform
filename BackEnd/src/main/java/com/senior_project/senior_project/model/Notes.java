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

    @Column(name = "isfavorite")
    private Boolean isFavorite;

    public Notes() {
    }

    public Notes(Class _class, LocalDate date, Integer notes, Boolean isFavorite) {
        this._class = _class;
        this.date = date;
        this.notes = notes;
        this.isFavorite = isFavorite;
    }

    public Notes(int notesID, Class _class, LocalDate date, Integer notes, Boolean isFavorite) {
        this.notesID = notesID;
        this._class = _class;
        this.date = date;
        this.notes = notes;
        this.isFavorite = isFavorite;
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

    public Boolean getIsFavorite() {
        return isFavorite;
    }

    public void setIsFavorite(Boolean favorite) {
        isFavorite = favorite;
    }

    @Override
    public String toString() {
        return "Notes{" +
                "notesID=" + notesID +
                ", _class=" + _class +
                ", date=" + date +
                ", notes=" + notes +
                ", isFavorite=" + isFavorite +
                '}';
    }
}
