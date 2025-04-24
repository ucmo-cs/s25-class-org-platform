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

    @ManyToOne
    @JoinColumn(name = "UserID", nullable = false)
    private User user;

    public Semester() {

    }

    public Semester(String semesterName, User user) {
        this.semesterName = semesterName;
        this.user = user;
    }

    public Semester(int semesterId, String semesterName, User user) {
        this.semesterId = semesterId;
        this.semesterName = semesterName;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Semester{" +
                "semesterId=" + semesterId +
                ", semesterName='" + semesterName + '\'' +
                ", user=" + user +
                '}';
    }
}
