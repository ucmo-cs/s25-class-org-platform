import { Class } from "./Class";

export class Notes {
    notesID: Number;
    _class: Class;
    date: Date;
    notes: Number;
    isFavorite: Boolean;

    constructor(notesID: Number, _class: Class, date: Date, notes: Number, isFavorite: Boolean) {
        this.notesID = notesID;
        this._class = _class;
        this.date = date;
        this.notes = notes;
        this.isFavorite = isFavorite;
    }
}