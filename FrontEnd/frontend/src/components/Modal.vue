<script>
    import { VDateInput } from 'vuetify/labs/VDateInput'

    export default {
        components: {
        VDateInput,
        },
        props: ['mode', 'info'],
    data() {
        return {
            startDate: null,
            endDate: null,
            showEventsModal: false,
            selectedDay: null,
        }
    },
}
</script>


<template>
    <div class="backdrop">
        <div class="modal">
            <div v-if="mode === 'addClass'">
                <div class="modal-header">
                    Add Class
                </div>
                <div class="modal-body">
                    <p>Class Name:</p>
                    <v-text-field label="ex. College Algebra"></v-text-field>
                    <br>
                    <p>Meeting Times:</p>
                    <v-text-field label="ex. 10am"></v-text-field>
                    <br>
                    <p>Teacher's Name:</p>
                    <v-text-field label="ex. Professor Smith"></v-text-field>
                    <br>
                    <p>Class Description:</p>
                    <v-textarea label="Things to remember about the class"></v-textarea>
                    <br>
                    <p>Office Hours:</p>
                    <v-text-field label="ex. 10am-11am"></v-text-field>
                    <br>
                    <p>Room Number/Zoom Link:</p>
                    <v-text-field label="ex. Room 202"></v-text-field>
                    <br>
                    <p>Instructors Phone Number:</p>
                    <v-text-field label="ex. 816-999-9999"></v-text-field>
                    <br>
                    <p>Instructors Email:</p>
                    <v-text-field label="smith@email.com"></v-text-field>
                    <br>
                    <p>Textbook:</p>
                    <v-text-field label="Link to textbook here"></v-text-field>
                    <br>
                    <p>Start Date:</p>
                    <v-date-input label="Date input" class="date_input"></v-date-input>
                    <br>
                    <p>End Date:</p>
                    <v-date-input label="Date input"></v-date-input>
                    <br>
                </div>
                <div class="modal-footer">
                    <button class="submit_button">Submit</button>
                    <button class="close_button" @click="$emit('close')">Close</button>
                </div>
            </div>
            <div v-if="mode === 'addEvent'">
                <div class="modal-header">
                    Creat Event
                </div>
                <div class="modal-body">
                    <p>Event Name:</p>
                    <v-text-field label="ex. Hang out with friends"></v-text-field>
                    <br>
                    <p>Event Description:</p>
                    <v-textarea label="Things to remember about the event"></v-textarea>
                    <br>
                    <p>Start Date:</p>
                    <v-date-input label="Date input" class="date_input"></v-date-input>
                    <br>
                    <p>End Date:</p>
                    <v-date-input label="Date input"></v-date-input>
                    <br>
                </div>
                <div class="modal-footer">
                    <button class="submit_button">Submit</button>
                    <button class="close_button" @click="$emit('close')">Close</button>
                </div>
            </div>
            <div v-if="mode === 'events'">
                <div class="modal-header">
                    All Events on {{ info[1] }} {{ info[0] }}, {{ info[2] }}
                </div>
                <div class="modal-body">
                    <div v-for="(event, index) in this.info[3]" :key="event.title + index" class="plans_style">
                        <button @click="() => { $emit('close'); $emit('navigateToClass', 'Class A'); }">{{ event.title }}</button>
                        <br>
                    </div>
                </div>
                <br>
                <div class="modal-footer">
                    <button class="close_button" @click="$emit('close')">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
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
        position: relative;
        bottom: 20px;
        left: 20px;
        right: 20px;
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
    .date_input {
        width: 100%;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    .example {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .plans_style {
        width: 100%;
        height: 20px;
        background-color: green;
        margin: 5px;
        text-align: center;
    }
</style>