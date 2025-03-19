package com.senior_project.senior_project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "semester")
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "SemesterID")
    private int semesterId;

    @Column(name = "SemesterName")
    private String semesterName;
}
