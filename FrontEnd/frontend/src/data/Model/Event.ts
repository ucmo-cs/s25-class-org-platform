import { Class } from "./Class";
import { User } from "./User";

export class Event {
    eventID: Number;
    name: String;
    description: String;
    start: Date;
    end: Date;
    classID: Class;
    user: User;
    isHomework: Boolean;
    file;

    constructor(eventID, name, description, start, end, classID, user, isHomework, file) {
        this.eventID = eventID;
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.classID = classID;
        this.user = user;
        this.isHomework = isHomework;
        this.file = file;
    }
}