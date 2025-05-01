<script>
import { MeetingTimes } from '../data/Model/MeetingTimes';
    export default {
        data() {
            return {
                sundayOn:false,
                mondayOn:false,
                tuesdayOn:false,
                wednesdayOn:false,
                thursdayOn:false,
                fridayOn:false,
                saturdayOn:false,
                sundayStart:null,
                sundayEnd:null,
                mondayStart:null,
                mondayEnd:null,
                tuesdayStart:null,
                tuesdayEnd:null,
                wednesdayStart:null,
                wednesdayEnd:null,
                thursdayStart:null,
                thursdayEnd:null,
                fridayStart:null,
                fridayEnd:null,
                saturdayStart:null,
                saturdayEnd:null,
                sundayDisabled:true,
                mondayDisabled:true,
                tuesdayDisabled:true,
                wednesdayDisabled:true,
                thursdayDisabled:true,
                fridayDisabled:true,
                saturdayDisabled:true,
            };
        },
        props: {
            eventName: {
                type: String,
                required: true
            },
            MeetingTimesIn: {
            }
        },
        mounted() {
            if(this.MeetingTimesIn != null) {
                if(this.MeetingTimesIn.sundayStart != null) {
                    this.sundayOn = true;
                    this.updateEnabled(0);
                    this.sundayStart = this.MeetingTimesIn.sundayStart.slice(0,5);
                    this.sundayEnd = this.MeetingTimesIn.sundayEnd.slice(0,5);
                }
                if(this.MeetingTimesIn.mondayStart != null) {
                    this.mondayOn = true;
                    this.updateEnabled(1);
                    this.mondayStart = this.MeetingTimesIn.mondayStart.slice(0,5);
                    this.mondayEnd = this.MeetingTimesIn.mondayEnd.slice(0,5);
                }
                if(this.MeetingTimesIn.tuesdayStart != null) {
                    this.tuesdayOn = true;
                    this.updateEnabled(2);
                    this.tuesdayStart = this.MeetingTimesIn.tuesdayStart.slice(0,5);
                    this.tuesdayEnd = this.MeetingTimesIn.tuesdayEnd.slice(0,5);
                }
                if(this.MeetingTimesIn.wednesdayStart != null) {
                    this.wednesdayOn = true;
                    this.updateEnabled(3);
                    this.wednesdayStart = this.MeetingTimesIn.wednesdayStart.slice(0,5);
                    this.wednesdayEnd = this.MeetingTimesIn.wednesdayEnd.slice(0,5);
                }
                if(this.MeetingTimesIn.thursdayStart != null) {
                    this.thursdayOn = true;
                    this.updateEnabled(4);
                    this.thursdayStart = this.MeetingTimesIn.thursdayStart.slice(0,5);
                    this.thursdayEnd = this.MeetingTimesIn.thursdayEnd.slice(0,5);
                }
                if(this.MeetingTimesIn.fridayStart != null) {
                    this.fridayOn = true;
                    this.updateEnabled(5);
                    this.fridayStart = this.MeetingTimesIn.fridayStart.slice(0,5);
                    this.fridayEnd = this.MeetingTimesIn.fridayEnd.slice(0,5);
                }
                if(this.MeetingTimesIn.saturdayStart != null) {
                    this.saturdayOn = true;
                    this.updateEnabled(6);
                    this.saturdayStart = this.MeetingTimesIn.saturdayStart.slice(0,5);
                    this.saturdayEnd = this.MeetingTimesIn.saturdayEnd.slice(0,5);
                }
                this.emitData();
            }
        }, 
        methods: {
            updateEnabled(weekDay) {
                switch(weekDay) {
                    case(0):
                        if(this.sundayOn) {
                            this.sundayDisabled = false;
                        } else {
                            this.sundayDisabled = true;
                            this.sundayStart = "";
                            this.sundayEnd = "";
                        }
                        break;
                    case(1):
                        if(this.mondayOn) {
                            this.mondayDisabled = false;
                        } else {
                            this.mondayDisabled = true;
                            this.mondayStart = "";
                            this.mondayEnd = "";
                        }
                        break;
                    case(2):
                        if(this.tuesdayOn) {
                            this.tuesdayDisabled = false;
                        } else {
                            this.tuesdayDisabled = true;
                            this.tuesdayStart = "";
                            this.tuesdayEnd = "";
                        }
                        break;
                    case(3):
                        if(this.wednesdayOn) {
                            this.wednesdayDisabled = false;
                        } else {
                            this.wednesdayDisabled = true;
                            this.wednesdayStart = "";
                            this.wednesdayStart = "";
                        }
                        break;
                    case(4):
                        if(this.thursdayOn) {
                            this.thursdayDisabled = false;
                        } else {
                            this.thursdayDisabled = true;
                            this.thursdayStart = "";
                            this.thursdayEnd = "";
                        }
                        break;
                    case(5):
                        if(this.fridayOn) {
                            this.fridayDisabled = false;
                        } else {
                            this.fridayDisabled = true;
                            this.fridayStart = "";
                            this.fridayEnd = "";
                        }
                        break;
                    case(6):
                        if(this.saturdayOn) {
                            this.saturdayDisabled = false;
                        } else {
                            this.saturdayDisabled = true;
                            this.saturdayStart = "";
                            this.saturdayEnd = "";
                        }
                        break;
                }
                
            },
            emitData() {
                let meetingTimesOut = new MeetingTimes(
                    this.MeetingTimesIn?.meetingTimesId != null ? this.MeetingTimesIn.meetingTimesId : null,
                    this.mondayOn? this.mondayStart + ":00" : null,
                    this.mondayOn? this.mondayEnd + ":00": null,
                    this.tuesdayOn? this.tuesdayStart + ":00": null,
                    this.tuesdayOn? this.tuesdayEnd + ":00": null,
                    this.wednesdayOn? this.wednesdayStart + ":00": null,
                    this.wednesdayOn? this.wednesdayEnd + ":00": null,
                    this.thursdayOn? this.thursdayStart + ":00": null,
                    this.thursdayOn? this.thursdayEnd + ":00": null,
                    this.fridayOn? this.fridayStart + ":00": null,
                    this.fridayOn? this.fridayEnd + ":00": null,
                    this.saturdayOn? this.saturdayStart + ":00": null,
                    this.saturdayEnd? this.saturdayEnd + ":00": null,
                    this.sundayOn? this.sundayStart + ":00": null,
                    this.sundayOn? this.sundayEnd + ":00": null
                );
                console.log(meetingTimesOut);
                this.$emit(this.eventName,meetingTimesOut);
            }
        }
    }
</script>
<template>
    <!--This is a template that will let us get meeting time data-->
    <table id="meetingTimesInput">
        <thead>
            <tr>
                <th id="meetingTimesInput">
                    <label for="sundayCheckbox">Sunday</label><br>
                    <input type="checkbox" id="sundayCheckbox" name="sundayCheckbox" v-model="sundayOn" @change="updateEnabled(0)"/>
                </th>
                <th id="meetingTimesInput">
                    <label for="mondayCheckbox">Monday</label><br>
                    <input type="checkbox" id="mondayCheckbox" name="mondayCheckbox" v-model="mondayOn" @change="updateEnabled(1)"/>
                </th>
                <th id="meetingTimesInput">
                    <label for="tuesdayCheckbox">Tuesday</label><br>
                    <input type="checkbox" id="tuesdayCheckbox" name="tuesdayCheckbox" v-model="tuesdayOn" @change="updateEnabled(2)"/>
                </th>
                <th id="meetingTimesInput">
                    <label for="wednesdayCheckbox">Wednesday</label><br>
                    <input type="checkbox" id="wednesdayCheckbox" name="wednesdayCheckbox" v-model="wednesdayOn" @change="updateEnabled(3)"/>
                </th>
                <th id="meetingTimesInput">
                    <label for="thursdayCheckbox">Thursday</label><br>
                    <input type="checkbox" id="thursdayCheckbox" name="thursdayCheckbox" v-model="thursdayOn" @change="updateEnabled(4)"/>
                </th>
                <th id="meetingTimesInput">
                    <label for="fridayCheckbox">Friday</label><br>
                    <input type="checkbox" id="fridayCheckbox" name="fridayCheckbox" v-model="fridayOn" @change="updateEnabled(5)"/>
                </th>
                <th id="meetingTimesInput">
                    <label for="saturdayCheckbox">Saturday</label><br>
                    <input type="checkbox" id="saturdayCheckbox" name="saturdayCheckbox" v-model="saturdayOn" @change="updateEnabled(6)"/>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}sundayStart`">Start</label><br>
                    <input type="time" :id="`${this.eventName}sundayStart`" :name="`${this.eventName}sundayStart`" v-model="this.sundayStart" :disabled="this.sundayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}mondayStart`">Start</label><br>
                    <input type="time" :id="`${this.eventName}mondayStart`" :name="`${this.eventName}mondayStart`" v-model="mondayStart" :disabled="this.mondayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}tuesdayStart`">Start</label><br>
                    <input type="time" :id="`${this.eventName}tuesdayStart`" :name="`${this.eventName}tuesdayStart`" v-model="tuesdayStart" :disabled="this.tuesdayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}wednesdayStart`">Start</label><br>
                    <input type="time" :id="`${this.eventName}wednesdayStart`" :name="`${this.eventName}wednesdayStart`" v-model="wednesdayStart" :disabled="this.wednesdayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}thursdayStart`">Start</label><br>
                    <input type="time" :id="`${this.eventName}thursdayStart`" :name="`${this.eventName}thursdayStart`" v-model="thursdayStart" :disabled="this.thursdayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}fridayStart`">Start</label><br>
                    <input type="time" :id="`${this.eventName}fridayStart`" :name="`${this.eventName}fridayStart`" v-model="fridayStart" :disabled="this.fridayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}saturdayStart`">Start</label><br>
                    <input type="time" :id="`${this.eventName}saturdayStart`" :name="`${this.eventName}saturdayStart`" v-model="saturdayStart" :disabled="this.saturdayDisabled" @change="emitData()"/>
                </td>
            </tr>
            <tr>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}sundayEnd`">End</label><br>
                    <input type="time" :id="`${this.eventName}sundayEnd`" :name="`${this.eventName}sundayEnd`" v-model="sundayEnd" :disabled="this.sundayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}mondayEnd`">End</label><br>
                    <input type="time" :id="`${this.eventName}mondayEnd`" :name="`${this.eventName}mondayEnd`" v-model="mondayEnd" :disabled="this.mondayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}tuesdayEnd`">End</label><br>
                    <input type="time" :id="`${this.eventName}tuesdayEnd`" :name="`${this.eventName}tuesdayEnd`" v-model="tuesdayEnd" :disabled="this.tuesdayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}wednesdayEnd`">End</label><br>
                    <input type="time" :id="`${this.eventName}wednesdayEnd`" :name="`${this.eventName}wednesdayEnd`" v-model="wednesdayEnd" :disabled="this.wednesdayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}thursdayEnd`">End</label><br>
                    <input type="time" :id="`${this.eventName}thursdayEnd`" :name="`${this.eventName}thursdayEnd`" v-model="thursdayEnd" :disabled="this.thursdayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}fridayEnd`">End</label><br>
                    <input type="time" :id="`${this.eventName}fridayEnd`" :name="`${this.eventName}fridayEnd`" v-model="fridayEnd" :disabled="this.fridayDisabled" @change="emitData()"/>
                </td>
                <td id="meetingTimesInput">
                    <label :for="`${this.eventName}saturdayEnd`">End</label><br>
                    <input type="time" :id="`${this.eventName}saturdayEnd`" :name="`${this.eventName}saturdayEnd`" v-model="saturdayEnd" :disabled="this.saturdayDisabled" @change="emitData()"/>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style>
    table#meetingTimesInput{
      border: 2px solid #2c3e50;
      border-collapse: collapse;
      height: 100%;
      width: 100%;
      border-radius:5px;
    }
    th#meetingTimesInput{
      border: 1px solid #2c3e50;
      text-align: center;
      background-color: white;
      font-weight: normal;
      border-radius:5px;
    }
    td#meetingTimesInput{
      text-align: left;
      background-color: white;
      border-left: 1px solid #2c3e50;
      border-right: 1px solid #2c3e50;
      width: 250px;
      text-align: center;
      padding-bottom: 5px;
      border-radius:5px;
    }
    input[type=time] {
        border:1px solid #2c3e50;
        border-radius:5px;
    }
    input[type=time]:disabled {
        background-color: lightgray;
    }
</style>