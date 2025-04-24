<script>
  import Calendar from './components/Calendar.vue'
  import Class from "./components/Class.vue";
  import Modal from "./components/Modal.vue"
  import { getAllUsers, getClassByUserAndSemester, getEventsByUser } from './data/api';
  import Homework from '@/components/Homework.vue'
  import Notes from '@/components/Notes.vue'

  export default {
    components: {
      Calendar,
      Class,
      Modal,
      Homework,
      Notes
    },
    data() {
      return {
        currentPage: "Calendar",
        semester: "Spring 2025",
        classes: [],
        clickClass: "None",
        newClassComponent: false,
        showModal: false,
        isClass: true,
        semesterID: -1,
        selectedDay: null,
        eventModalMonth: null,
        eventModalYear: null,
        mode: null,
        events: [],
        dataGrabbed: false,
        allUsers: [],
        userIndex: 0,
        homeworkID: 0,
        notesID: 0,
        classPage: "Home"
      }
    },
    async mounted() {
      await getClassByUserAndSemester(1, 1).then(cs => {
        this.classes = cs;
      });
      await getEventsByUser(1).then(es => {
        this.events = es;
      });
      await getAllUsers().then(us => {
        this.allUsers = us;
      });
      this.dataGrabbed = true;
    },
    methods: {
      navigateToHome() {
        this.currentPage = "Calendar"
      },
      navigateToClass(className, classPage) {
        console.log(className)
        this.clickClass = className
        this.currentPage = "Class"
        this.classPage = classPage
      },
      navigateToHomework(homeworkID) {
        this.currentPage = "Homework"
        this.homeworkID = homeworkID
      },
      navigateToNotes(notesID) {
        this.currentPage = "Notes"
        this.notesID = notesID
      },
      openModal(data) {
        console.log(data[0])
        this.mode = data[0]
        this.showModal = true
        this.info = data[1]
      },
      loadSemester(id) {
        // API call for semester data based on semester id. Set data values to dynamically update screen.

      }
    }
  }
</script>

<template>
  <body v-if="dataGrabbed==true">
    <div class="topBar">
      <button class="homeButton" @click="navigateToHome">Student Helper</button>
      <button class="userButton">{{ "User: " + this.allUsers[userIndex].userName }}</button><br>
    </div>
    <div class="sideBar"> 
      <div class="semester_buttons" @click="loadSemester(semesterID-1)"><</div>
      <h1>{{ semester }}</h1>
      <div class="semester_buttons" @click="loadSemester(semesterID+1)">></div>
      <hr><hr>
      <div v-for="(event, index) in classes">
        <div>
          <button class="class_button" :class="{ button: event.name }" @click="navigateToClass(event.name, 'Home')">{{ event.name }}</button>
        </div>
      </div>
      <button class="add_button" @click="openModal(['addClass', null])">Add Class</button>
      <button class="add_button" @click="openModal(['addEvent', null])">Add Event</button>
    </div>
    <div class="mainScreen">
      <Calendar v-if="currentPage === 'Calendar'" @openModal="openModal" @navigateToClass="navigateToClass" :events="events" :classes="classes"/>
      <div v-for="(event, index) in classes">
        <Class v-if="currentPage === 'Class' && event.name === clickClass" :currentClass="this.clickClass" :classPage="this.classPage" @openModal="openModal(['addClass', null])" @navigateToHomework="navigateToHomework" @navigateToNotes="navigateToNotes"/>
      </div>
      <Homework v-if="currentPage === 'Homework'" :homeworkID="this.homeworkID" :parentClass="clickClass" @navigateToClass="navigateToClass"/>
      <Notes v-if="currentPage === 'Notes'" :notesID="this.notesID" :parentClass="clickClass" @navigateToClass="navigateToClass"/>
    </div>
    <modal v-if="showModal" :mode="this.mode" :info="this.info" @close="showModal = false" @navigateToClass="navigateToClass" />
  </body>
</template>

<style>
  html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
  }
  .mainScreen {
    margin-top: 100px;
    margin-left: 300px;
    width: 85%;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
  }
  .topBar {
    width: 100%;
    height: 100px;
    background: #222222;
    position: fixed;
    margin-top: 0;
    display: inline-block;
  }
  .topBar button {
    font-size: 30px;
    cursor: pointer;
    border: none;
  }
  .homeButton {
    background-color: #222222;
    color: white;
    height: 100%;
    width: 300px;
  }
  .userButton {
    float: right;
    position: relative;
    background-color: white;
    color: black;
    height: 70%;
    top: 10%;
    right: 1%;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .sideBar {
    margin-top: 100px;
    width: 300px;
    height: 100%;
    background: #2c3e50;
    position: fixed;
  }
  .sideBar .semester_buttons {
    color: white;
    font-size: 30px;
    width: auto;
    display: inline-flex;
    margin: 20px;
    cursor: pointer;
  }
  .sideBar h1 {
    text-align: center;
    color: white;
    display: inline-flex;
  }
  .sideBar .class_button {
    width: 300px;
    height: 75px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border-bottom: 2px solid white;
  }
  .sideBar .add_button {
    background-color: green;
    color: white;
    padding: 15px 20px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    margin: 6%;
    border-radius: 5px;
  }
  .sideBar li {
    list-style-type: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .example {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>