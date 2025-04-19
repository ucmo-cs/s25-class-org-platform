import { Semester } from "./Semester"
import { User } from "./User"
import { MeetingTimes } from "./MeetingTimes";

export class Class {
    classID: Number;
    name: String;
    semester: Semester;
    meetingLocation: String;
    meetingTimes: MeetingTimes;
    user: User;
    instructor: String;
    description: String;
    officeLocation: String;
    officeHours: MeetingTimes;
    instructorPhone: String;
    instructorEmail: String;
    textbook: String;
    startDate: Date;
    endDate: Date;

    constructor(classID: Number, name: String, semester: Semester, meetingLocation: String, meetingTimes: MeetingTimes, user: User, description: String, officeLocation: String, officeHours: MeetingTimes, instructorPhone: String, instructorEmail: String, textbook: String, startDate: Date, endDate: Date) {
        this.classID = classID;
        this.name = name;
        this.semester = semester;
        this.meetingLocation = meetingLocation;
        this.meetingTimes = meetingTimes;
        this.user = user;
        this.description = description;
        this.officeLocation = officeLocation;
        this.officeHours = officeHours;
        this.instructorPhone = instructorPhone;
        this.instructorEmail = instructorEmail;
        this.textbook = textbook;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}