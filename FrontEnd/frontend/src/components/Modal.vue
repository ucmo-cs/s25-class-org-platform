<script>
    import { VDateInput } from 'vuetify/labs/VDateInput'
    import { addClass } from '@/data/api';
    import { Class } from '@/data/Model/Class';
    import { User } from '@/data/Model/User';
    import { addEvent } from '@/data/api';
    import { Event } from '@/data/Model/Event';
    import MeetingTimesInput from './MeetingTimesInput.vue';
    import { deleteClass, deleteEvent, updateClass, updateEvent } from '../data/api';

    export default {
        components: {
        VDateInput,
        MeetingTimesInput
        },
        props: {
            mode: {
                type: String,
            },
            info: {
            },
            user: {
            },
            semesters:{
                type: Array
            },
            semesterIndex: {
                type: Number
            },
            Class:{
            },
            Event:{
            }
        },
    data() {
        return {
            startDate: null,
            endDate: null,
            showEventsModal: false,
            selectedDay: null,
            courseName: null,
            location: null,
            description: null,
            phoneNum: null,
            email: null,
            textbook: null,
            instructor: null,
            eventName: null,
            eventDescription: null,
            eventStartDate: null,
            eventEndDate: null,
            meetingTimesForClass: null,
            officeHours: null,
            officeLocation: null,
            modes: this.$props.mode,
        }
    },
    mounted() {
        if (this.modes === 'editClass') {
            this.courseName = this.Class.name;
            this.semester = this.Class.semester;
            this.instructor = this.Class.instructor;
            this.description = this.Class.description;
            this.location = this.Class.meetingLocation;
            this.phoneNum = this.Class.instructorPhone;
            this.email = this.Class.instructorEmail;
            this.officeLocation = this.Class.officeLocation;
            this.textbook = this.Class.textbook;
            this.startDate = this.Class.startDate;
            this.endDate = this.Class.endDate;
        }
        if (this.modes === 'editEvent') {
            this.eventName = this.Event.name;
            this.eventDescription = this.Event.description;
            this.eventStartDate = this.Event.start;
            this.eventEndDate = this.Event.end;
        }
    },
    methods: {
        addClass() {
            let classOut = new Class(null, this.courseName, this.semesters[this.semesterIndex], this.location, this.meetingTimesForClass, this.user, this.instructor, this.description, null, this.officeHours, this.phoneNum, this.email, this.textbook, this.startDate, this.endDate);
            addClass(classOut);
            this.$emit('close');
        },
        addEvent() {
            addEvent(new Event(null, this.eventName, this.eventDescription, this.eventStartDate, this.eventEndDate, new Class(1, null, null, null, null, null, null, null, null, null, null, null, null, null, null), new User(1, "MilesL35"), null, null))
            this.$emit('close');
        },
        updateMeetingTimes(meetingTimesIn) {
            console.log(meetingTimesIn);
            this.meetingTimesForClass = meetingTimesIn;
            console.log(this.meetingTimesForClass);
            
        },
        updateOfficeHours(officeHoursIn) {
            this.officeHours = officeHoursIn;
        },
        async deleteClass() {
            await deleteClass(this.Class.classID);
            this.$emit('close');
            this.$emit('navigateToHome');
        },
        async updateClass() {
            console.log(this.meetingTimesForClass);
            console.log(this.officeHours);
            await updateClass(new Class(this.Class.classID, this.courseName, this.semesters[this.semesterIndex], this.location, this.meetingTimesForClass, this.user, this.instructor, this.description, null, this.officeHours, this.phoneNum, this.email, this.textbook, this.startDate, this.endDate))
            this.$emit('close');
        },
        async updateEvent() {
            await updateEvent(new Event(this.Event.eventID, this.eventName, this.eventDescription, this.eventStartDate, this.eventEndDate, new Class(1, null, null, null, null, null, null, null, null, null, null, null, null, null, null), new User(1, "MilesL35"), null, null));
            this.$emit('close');
        },
        async deleteEvent() {
            await deleteEvent(this.Event.eventID);
            this.$emit('close');
            this.$emit('navigateToHome');
        },
        openEventOrClass(event) {
        let isClass;
        this.event = event;
        try {
          let x = event.meetingTimes.meetingTimesId;
          isClass = true;
        } catch (e) {
          isClass = false;
        }
        if (isClass) {
            this.$emit('close');
            this.$emit('navigateToClass', event, 'Home');
        } else {
          this.eventName = this.event.name;
            this.eventDescription = this.event.description;
            this.eventStartDate = this.event.start;
            this.eventEndDate = this.event.end;
            this.modes = 'editEvent';
        }
      }
    },
}
</script>

<template>
    <div class="backdrop">
      <div class="modal">
        <div style="position: fixed; cursor: pointer; font-size: 20px; text-align: right; padding-left: 935px;" @click="$emit('close')">X</div>
        <div v-if="modes === 'addClass'">
                <div class="modal-header">Add Class</div>
                <div class="modal-body">
                    <p>Class Name:</p>
                    <v-text-field label="ex. College Algebra" v-model="courseName"></v-text-field>
                    <br>
                    <p>Semester:</p>
                    <select id="semesters" v-model="this.semesterIndex">
                        <option v-for="(semester, index) in this.semesters" :MeetingTimesIn="null" :value="index" :selected="this.semesterIndex === index">{{ semester.semesterName }}</option>
                    </select>
                    <br>
                    <p>Meeting Times:</p>
                    <MeetingTimesInput @MeetingTimes="this.updateMeetingTimes" :eventName="'MeetingTimes'"></MeetingTimesInput>
                    <br>
                    <p>Teacher's Name:</p>
                    <v-text-field label="ex. Professor Smith" v-model="instructor"></v-text-field>
                    <br>
                    <p>Class Description:</p>
                    <v-textarea label="Things to remember about the class" v-model="description"></v-textarea>
                    <br>
                    <p>Room Number/Zoom Link:</p>
                    <v-text-field label="ex. Room 202" v-model="location"></v-text-field>
                    <br>
                    <p>Instructors Phone Number:</p>
                    <v-text-field label="ex. 816-999-9999" v-model="phoneNum"></v-text-field>
                    <br>
                    <p>Instructors Email:</p>
                    <v-text-field label="smith@email.com" v-model="email"></v-text-field>
                    <br>
                    <p>Office:</p>
                    <v-text-field label="ex. Room 102" v-model="this.officeLocation"></v-text-field>
                    <br>
                    <p>Office Hours:</p>
                    <MeetingTimesInput @OfficeHours="this.updateOfficeHours" :MeetingTimesIn="null" :eventName="'OfficeHours'"></MeetingTimesInput>
                    <br>
                    <p>Textbook:</p>
                    <v-text-field label="Link to textbook here" v-model="textbook"></v-text-field>
                    <br>
                    <p>Start Date:</p>
                    <v-date-input label="Date input" prepend-icon="" class="date_input" v-model="startDate"></v-date-input>
                    <br>
                    <p>End Date:</p>
                    <v-date-input label="Date input" prepend-icon="" v-model="endDate"></v-date-input>
                </div>
                <div class="modal-footer">
                    <button class="submit_button" @click="addClass">Add Class</button>
                </div>
            </div>
            <div v-if="modes === 'addEvent'">
                <div class="modal-header">Add Event</div>
                <div class="modal-body">
                    <p>Event Name:</p>
                    <v-text-field label="ex. Hang out with friends" v-model="eventName"></v-text-field>
                    <br>
                    <p>Event Description:</p>
                    <v-textarea label="Things to remember about the event" v-model="eventDescription"></v-textarea>
                    <br>
                    <p>Start Date:</p>
                    <v-date-input label="Date input" prepend-icon="" class="date_input" v-model="eventStartDate"></v-date-input>
                    <br>
                    <p>End Date:</p>
                    <v-date-input label="Date input" prepend-icon="" v-model="eventEndDate"></v-date-input>
                </div>
                <div class="modal-footer">
                    <button class="submit_button" @click="addEvent">Add Event</button>
                </div>
            </div>
            <div v-if="modes === 'events'">
                <div class="modal-header">
                    All Events on {{ info[1] }} {{ info[0] }}, {{ info[2] }}
                </div>
                <div class="modal-body">
                    <div v-for="(event, index) in this.info[3]" :key="event.name + index" class="plans_style">
                        <button @click="() => { openEventOrClass(event) }">{{ event.name }}</button>
                        <br>
                    </div>
                </div>
                <br>
                <div class="modal-footer">
                </div>
            </div>
            <div v-if="modes === 'editClass'">
                <div class="modal-header">
                    Edit Class
                </div>
                <div class="modal-body">
                    <p>Class Name:</p>
                    <v-text-field label="ex. College Algebra" v-model="courseName"></v-text-field>
                    <br>
                    <p>Semester:</p>
                    <select id="semesters" v-model="this.semesterIndex">
                        <option v-for="(semester, index) in this.semesters" :value="index" :selected="this.semesterIndex === index">{{ semester.semesterName }}</option>
                    </select>
                    <br>
                    <p>Meeting Times:</p>
                    <MeetingTimesInput @MeetingTimes="this.updateMeetingTimes" :MeetingTimesIn="this.Class.meetingTimes" :eventName="'MeetingTimes'"></MeetingTimesInput>
                    <br>
                    <p>Teacher's Name:</p>
                    <v-text-field label="ex. Professor Smith" v-model="instructor"></v-text-field>
                    <br>
                    <p>Class Description:</p>
                    <v-textarea label="Things to remember about the class" v-model="description"></v-textarea>
                    <br>
                    <p>Room Number/Zoom Link:</p>
                    <v-text-field label="ex. Room 202" v-model="location"></v-text-field>
                    <br>
                    <p>Instructors Phone Number:</p>
                    <v-text-field label="ex. 816-999-9999" v-model="phoneNum"></v-text-field>
                    <br>
                    <p>Instructors Email:</p>
                    <v-text-field label="smith@email.com" v-model="email"></v-text-field>
                    <br>
                    <p>Office:</p>
                    <v-text-field label="ex. Room 102" v-model="this.officeLocation"></v-text-field>
                    <br>
                    <p>Office Hours:</p>
                    <MeetingTimesInput @OfficeHours="this.updateOfficeHours" :MeetingTimesIn="this.Class.officeHours" :eventName="'OfficeHours'"></MeetingTimesInput>
                    <br>
                    <p>Textbook:</p>
                    <v-text-field label="Link to textbook here" v-model="textbook"></v-text-field>
                    <br>
                    <p>Start Date:</p>
                    <v-date-input label="Date input" prepend-icon="" class="date_input" v-model="startDate"></v-date-input>
                    <br>
                    <p>End Date:</p>
                    <v-date-input label="Date input" prepend-icon="" v-model="endDate"></v-date-input>
                </div>
              <button style="justify-self: left" class="delete_button" @click="deleteClass">Delete Class</button>
              <div class="modal-footer">
                  <button class="submit_button" @click="updateClass">Submit</button>
                </div>
            </div>
            <div v-if="modes === 'editEvent'">
                <div class="modal-header">Edit Event</div>
                <div class="modal-body">
                    <p>Event Name:</p>
                    <v-text-field label="ex. Hang out with friends" v-model="eventName"></v-text-field>
                    <br>
                    <p>Event Description:</p>
                    <v-textarea label="Things to remember about the event" v-model="eventDescription"></v-textarea>
                    <br>
                    <p>Start Date:</p>
                    <v-date-input label="Date input" prepend-icon="" class="date_input" v-model="eventStartDate"></v-date-input>
                    <br>
                    <p>End Date:</p>
                    <v-date-input label="Date input" prepend-icon="" v-model="eventEndDate"></v-date-input>
                </div>
                <div class="modal-footer">
                    <button class="submit_button" @click="updateEvent">Update Event</button>
                    <button style="justify-self: left" class="delete_button" @click="deleteEvent">Delete Event</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    select {
        border: 1px solid #2c3e50;
        border-radius: 5px;
        font-size: 12pt;
        margin-bottom: 20px;
        padding: 2px;
        -webkit-appearance: menulist;
        -moz-appearance: menulist;
        appearance: menulist-button;
    }
    .modal {
        position: relative;
        width: 1000px;
        height: 700px;
        overflow-y: scroll;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .modal-footer {
        padding: 10px;
        text-align: right;
    }
    
    .modal-header {
        margin-top: 0;
        color: black;
        font-size: x-large;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;

    }
    .modal-body {
        margin: 20px 0;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
    }
    .submit_button {
        background-color: green;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    }
    .close_button {
        background-color: red;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    }
    .close_button, .submit_button {
        margin-left: 10px;
    }
    .date_input {
        width: 100%;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    .plans_style {
        width: 100%;
        height: 20px;
        background-color: #53708d;
        margin: 5px;
        text-align: center;
    }
    .delete_button {
        background-color: red;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
        text-align: left;
    }
</style>