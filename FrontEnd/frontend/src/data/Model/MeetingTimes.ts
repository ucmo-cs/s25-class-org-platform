export class MeetingTimes {
    meetingTimesId: Number;
    mondayStart: Date;
    mondayEnd: Date;
    tuesdayStart: Date;
    tuesdayEnd: Date;
    wednesdayStart: Date;
    wednesdayEnd: Date;
    thursdayStart: Date;
    thursdayEnd: Date;
    fridayStart: Date;
    fridayEnd: Date;
    saturdayStart: Date;
    saturdayEnd: Date;
    sundayStart: Date;
    sundayEnd: Date;

    constructor(meetingTimesId: Number, mondayStart: Date, mondayEnd: Date, tuesdayStart: Date, tuesdayEnd: Date, wednesdayStart: Date, wednesdayEnd: Date, thursdayStart: Date, thursdayEnd: Date, firdayStart: Date, firdayEnd: Date, saturdayStart: Date, saturdayEnd: Date, sundayStart: Date, sundayEnd: Date) {
        this.meetingTimesId = meetingTimesId;
        this.mondayStart = mondayStart;
        this.mondayEnd = mondayEnd;
        this.tuesdayStart = tuesdayStart;
        this.tuesdayEnd = tuesdayEnd;
        this.wednesdayStart = wednesdayStart;
        this.wednesdayEnd = wednesdayEnd;
        this.thursdayStart = thursdayStart;
        this.thursdayEnd = thursdayEnd;
        this.fridayStart = firdayStart;
        this.fridayEnd = firdayEnd;
        this.saturdayStart = saturdayStart;
        this.saturdayEnd = saturdayEnd;
        this.sundayStart = sundayStart;
        this.sundayEnd = sundayEnd;
    }
}