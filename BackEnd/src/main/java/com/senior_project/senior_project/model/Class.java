package com.senior_project.senior_project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "class")
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "ClassID")
    private int classID;

    @Column(name = "Name")
    private String name;

    @Column(name = "SemesterID")
    private Semester semester;

    @Column(name = "MeetingLocation")
    private String meetingLocation;

    @Column(name = "UserID")
    private User user;
}
