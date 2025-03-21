package com.senior_project.senior_project.model;

import jakarta.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "meetingtimes")
public class MeetingTimes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Meetingtimesid")
    private int meetingTimesId;

//    @OneToOne(mappedBy = "meetingTimes")
//    private Class classMeetingTimes;

//    @OneToOne(mappedBy = "officeHours")
//    private Class classOfficeHours;

    @Column(name = "Mondaystart")
    private LocalTime mondayStart;

    @Column(name = "Mondayend")
    private LocalTime mondayEnd;

    @Column(name = "Tuesdaystart")
    private LocalTime tuesdayStart;

    @Column(name = "Tuesdayend")
    private LocalTime tuesdayEnd;

    @Column(name = "Wednesdaystart")
    private LocalTime wednesdayStart;

    @Column(name = "Wednesdayend")
    private LocalTime wednesdayEnd;

    @Column(name = "Thursdaystart")
    private LocalTime thursdayStart;

    @Column(name = "Thursdayend")
    private LocalTime thursdayEnd;

    @Column(name = "Fridaystart")
    private LocalTime fridayStart;

    @Column(name = "Fridayend")
    private LocalTime fridayEnd;

    @Column(name = "Saturdaystart")
    private LocalTime saturdayStart;

    @Column(name = "Saturdayend")
    private LocalTime saturdayEnd;

    @Column(name = "Sundaystart")
    private LocalTime sundayStart;

    @Column(name = "Sundayend")
    private LocalTime sundayEnd;

    public MeetingTimes() {
    }

    public MeetingTimes(LocalTime mondayStart, LocalTime mondayEnd, LocalTime tuesdayStart, LocalTime tuesdayEnd, LocalTime wednesdayStart, LocalTime wednesdayEnd, LocalTime thursdayStart, LocalTime thursdayEnd, LocalTime fridayStart, LocalTime fridayEnd, LocalTime saturdayStart, LocalTime saturdayEnd, LocalTime sundayStart, LocalTime sundayEnd) {
        this.mondayStart = mondayStart;
        this.mondayEnd = mondayEnd;
        this.tuesdayStart = tuesdayStart;
        this.tuesdayEnd = tuesdayEnd;
        this.wednesdayStart = wednesdayStart;
        this.wednesdayEnd = wednesdayEnd;
        this.thursdayStart = thursdayStart;
        this.thursdayEnd = thursdayEnd;
        this.fridayStart = fridayStart;
        this.fridayEnd = fridayEnd;
        this.saturdayStart = saturdayStart;
        this.saturdayEnd = saturdayEnd;
        this.sundayStart = sundayStart;
        this.sundayEnd = sundayEnd;
    }

    public MeetingTimes(int meetingTimesId, LocalTime mondayStart, LocalTime mondayEnd, LocalTime tuesdayStart, LocalTime tuesdayEnd, LocalTime wednesdayStart, LocalTime wednesdayEnd, LocalTime thursdayStart, LocalTime thursdayEnd, LocalTime fridayStart, LocalTime fridayEnd, LocalTime saturdayStart, LocalTime saturdayEnd, LocalTime sundayStart, LocalTime sundayEnd) {
        this.meetingTimesId = meetingTimesId;
        this.mondayStart = mondayStart;
        this.mondayEnd = mondayEnd;
        this.tuesdayStart = tuesdayStart;
        this.tuesdayEnd = tuesdayEnd;
        this.wednesdayStart = wednesdayStart;
        this.wednesdayEnd = wednesdayEnd;
        this.thursdayStart = thursdayStart;
        this.thursdayEnd = thursdayEnd;
        this.fridayStart = fridayStart;
        this.fridayEnd = fridayEnd;
        this.saturdayStart = saturdayStart;
        this.saturdayEnd = saturdayEnd;
        this.sundayStart = sundayStart;
        this.sundayEnd = sundayEnd;
    }

    public int getMeetingTimesId() {
        return meetingTimesId;
    }

    public LocalTime getMondayStart() {
        return mondayStart;
    }

    public void setMondayStart(LocalTime mondayStart) {
        this.mondayStart = mondayStart;
    }

    public LocalTime getMondayEnd() {
        return mondayEnd;
    }

    public void setMondayEnd(LocalTime mondayEnd) {
        this.mondayEnd = mondayEnd;
    }

    public LocalTime getTuesdayStart() {
        return tuesdayStart;
    }

    public void setTuesdayStart(LocalTime tuesdayStart) {
        this.tuesdayStart = tuesdayStart;
    }

    public LocalTime getTuesdayEnd() {
        return tuesdayEnd;
    }

    public void setTuesdayEnd(LocalTime tuesdayEnd) {
        this.tuesdayEnd = tuesdayEnd;
    }

    public LocalTime getWednesdayStart() {
        return wednesdayStart;
    }

    public void setWednesdayStart(LocalTime wednesdayStart) {
        this.wednesdayStart = wednesdayStart;
    }

    public LocalTime getWednesdayEnd() {
        return wednesdayEnd;
    }

    public void setWednesdayEnd(LocalTime wednesdayEnd) {
        this.wednesdayEnd = wednesdayEnd;
    }

    public LocalTime getThursdayStart() {
        return thursdayStart;
    }

    public void setThursdayStart(LocalTime thursdayStart) {
        this.thursdayStart = thursdayStart;
    }

    public LocalTime getThursdayEnd() {
        return thursdayEnd;
    }

    public void setThursdayEnd(LocalTime thursdayEnd) {
        this.thursdayEnd = thursdayEnd;
    }

    public LocalTime getFridayStart() {
        return fridayStart;
    }

    public void setFridayStart(LocalTime fridayStart) {
        this.fridayStart = fridayStart;
    }

    public LocalTime getFridayEnd() {
        return fridayEnd;
    }

    public void setFridayEnd(LocalTime fridayEnd) {
        this.fridayEnd = fridayEnd;
    }

    public LocalTime getSaturdayStart() {
        return saturdayStart;
    }

    public void setSaturdayStart(LocalTime saturdayStart) {
        this.saturdayStart = saturdayStart;
    }

    public LocalTime getSaturdayEnd() {
        return saturdayEnd;
    }

    public void setSaturdayEnd(LocalTime saturdayEnd) {
        this.saturdayEnd = saturdayEnd;
    }

    public LocalTime getSundayStart() {
        return sundayStart;
    }

    public void setSundayStart(LocalTime sundayStart) {
        this.sundayStart = sundayStart;
    }

    public LocalTime getSundayEnd() {
        return sundayEnd;
    }

    public void setSundayEnd(LocalTime sundayEnd) {
        this.sundayEnd = sundayEnd;
    }

    @Override
    public String toString() {
        return "MeetingTimes{" +
                "meetingTimesId=" + meetingTimesId +
                ", mondayStart=" + mondayStart +
                ", mondayEnd=" + mondayEnd +
                ", tuesdayStart=" + tuesdayStart +
                ", tuesdayEnd=" + tuesdayEnd +
                ", wednesdayStart=" + wednesdayStart +
                ", wednesdayEnd=" + wednesdayEnd +
                ", thursdayStart=" + thursdayStart +
                ", thursdayEnd=" + thursdayEnd +
                ", fridayStart=" + fridayStart +
                ", fridayEnd=" + fridayEnd +
                ", saturdayStart=" + saturdayStart +
                ", saturdayEnd=" + saturdayEnd +
                ", sundayStart=" + sundayStart +
                ", sundayEnd=" + sundayEnd +
                '}';
    }
}
