import { Class } from "./Class";

export class Notes {
    notesID: Number;
    _class: Class;
    date: Date;
    notes: Number;

    constructor(notesID: Number, _class: Class, date: Date, notes: Number) {
        this.notesID = notesID;
        this._class = _class;
        this.date = date;
        this.notes = notes;
    }
}