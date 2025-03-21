package com.senior_project.senior_project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "semester")
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Semesterid")
    private int semesterId;

    @Column(name = "Semestername")
    private String semesterName;

    public Semester() {

    }

    public Semester(String semesterName) {
        this.semesterName = semesterName;
    }

    public Semester(int semesterId, String semesterName) {
        this.semesterId = semesterId;
        this.semesterName = semesterName;
    }

    public int getSemesterId() {
        return semesterId;
    }


    public String getSemesterName() {
        return semesterName;
    }

    public void setSemesterName(String semesterName) {
        if(semesterName.isEmpty()){
            throw new IllegalArgumentException("Semester Name can't be empty.");
        }
        this.semesterName = semesterName;
    }

    @Override
    public String toString() {
        return "Semester{" +
                "semesterId=" + semesterId +
                ", semesterName='" + semesterName + '\'' +
                '}';
    }
}
