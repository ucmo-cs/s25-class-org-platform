import { User } from "./User";

export class Semester {
    semesterID: Number;
    semesterName: String;
    user: User;

    constructor(semesterID: Number, semesterName: String, user: User) {
        this.semesterID = semesterID;
        this.semesterName = semesterName;
        this.user = user;
    }
}