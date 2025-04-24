import { User } from "./User";

export class Semester {
    semesterId: Number;
    semesterName: String;
    user: User;

    constructor(semesterID: Number, semesterName: String, user: User) {
        this.semesterId = semesterID;
        this.semesterName = semesterName;
        this.user = user;
    }
}