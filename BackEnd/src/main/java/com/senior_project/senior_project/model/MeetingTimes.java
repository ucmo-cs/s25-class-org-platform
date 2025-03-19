package com.senior_project.senior_project.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "meetingtimes")
public class MeetingTimes {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "MeetingTimesID")
    private int meetingTimesId;

    @Column(name = "MondayStart")
    private Date mondayStart;

    @Column(name = "MondayEnd")
    private Date mondayEnd;

    @Column(name = "TuesdayStart")
    private Date tuesdayStart;

    @Column(name = "TuesdayEnd")
    private Date tuesdayEnd;

    @Column(name = "WednesdayStart")
    private Date wednesdayStart;

    @Column(name = "WednesdayEnd")
    private Date wednesdayEnd;

    @Column(name = "ThursdayStart")
    private Date thursdayStart;

    @Column(name = "ThursdayEnd")
    private Date thursdayEnd;

    @Column(name = "FridayStart")
    private Date fridayStart;

    @Column(name = "FridayEnd")
    private Date fridayEnd;

    @Column(name = "SaturdayStart")
    private Date saturdayStart;

    @Column(name = "SaturdayEnd")
    private Date saturdayEnd;

    @Column(name = "SundayStart")
    private Date sundayStart;

    @Column(name = "SundayEnd")
    private Date sundayEnd;
}
