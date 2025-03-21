package com.senior_project.senior_project.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "class")
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "Classid")
    private int classID;

    @Column(name = "Name")
    private String name;

//    @Column(name = "Semesterid")
//    private Semester semester;

    @Column(name = "Meetinglocation")
    private String meetingLocation;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "meetingtimesid", referencedColumnName = "meetingTimesId")
    private MeetingTimes meetingTimes;

//    @Column(name = "Userid")
//    private User user;

    @Column(name = "Instructor")
    private String instructor;

    @Column(name = "Description")
    private String description;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "Officehoursid", referencedColumnName = "meetingTimesId")
    private MeetingTimes officeHours;

    @Column(name = "Instructorphone")
    private String instructorPhone;

    @Column(name = "Instructoremail")
    private String instructorEmail;

    @Column(name = "Textbook")
    private String textbook;

    @Column(name="Startdate")
    private LocalDate startDate;

    @Column(name="Enddate")
    private LocalDate endDate;

    public Class() {
    }

    public Class(int classID, String name, String meetingLocation, String instructor, String description, String instructorPhone, String instructorEmail, String textbook, LocalDate startDate, LocalDate endDate) {
        this.classID = classID;
        this.name = name;
        this.meetingLocation = meetingLocation;
        this.instructor = instructor;
        this.description = description;
        this.instructorPhone = instructorPhone;
        this.instructorEmail = instructorEmail;
        this.textbook = textbook;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Class(String name, String meetingLocation, String instructor, String description, String instructorPhone, String instructorEmail, String textbook, LocalDate startDate, LocalDate endDate) {
        this.name = name;
        this.meetingLocation = meetingLocation;
        this.instructor = instructor;
        this.description = description;
        this.instructorPhone = instructorPhone;
        this.instructorEmail = instructorEmail;
        this.textbook = textbook;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public int getClassID() {
        return classID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMeetingLocation() {
        return meetingLocation;
    }

    public void setMeetingLocation(String meetingLocation) {
        this.meetingLocation = meetingLocation;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getInstructorPhone() {
        return instructorPhone;
    }

    public void setInstructorPhone(String instructorPhone) {
        this.instructorPhone = instructorPhone;
    }

    public String getInstructorEmail() {
        return instructorEmail;
    }

    public void setInstructorEmail(String instructorEmail) {
        this.instructorEmail = instructorEmail;
    }

    public String getTextbook() {
        return textbook;
    }

    public void setTextbook(String textbook) {
        this.textbook = textbook;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public MeetingTimes getMeetingTimes() {
        return meetingTimes;
    }

    public void setMeetingTimes(MeetingTimes meetingTimes) {
        this.meetingTimes = meetingTimes;
    }

    public MeetingTimes getOfficeHours() {
        return officeHours;
    }

    public void setOfficeHours(MeetingTimes officeHours) {
        this.officeHours = officeHours;
    }

    @Override
    public String toString() {
        return "Class{" +
                "classID=" + classID +
                ", name='" + name + '\'' +
                ", meetingLocation='" + meetingLocation + '\'' +
                ", meetingTimes=" + meetingTimes.toString() +
                ", instructor='" + instructor + '\'' +
                ", description='" + description + '\'' +
                ", officeHours=" + officeHours.toString() +
                ", instructorPhone='" + instructorPhone + '\'' +
                ", instructorEmail='" + instructorEmail + '\'' +
                ", textbook='" + textbook + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
