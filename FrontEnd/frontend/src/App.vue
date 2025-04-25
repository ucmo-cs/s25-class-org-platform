<script>
  import Calendar from './components/Calendar.vue'
  import Class from "./components/Class.vue";
  import Modal from "./components/Modal.vue"
  import { getAllUsers, getClassByID, getClassByUserAndSemester, getEventsByUser, getSemestersByUser, getClassesByUser } from './data/api';
  import UsersModal from "./components/UsersModal.vue";
  import SemestersModal from './components/SemestersModal.vue';
  import Homework from '@/components/Homework.vue'
  import Notes from '@/components/Notes.vue'

  export default {
    components: {
      Calendar,
      Class,
      Modal,
      UsersModal,
      SemestersModal,
      Homework,
      Notes
    },
    data() {
      return {
        currentPage: "Calendar",
        classes: [],
        classesForSideBar: [],
        clickClass: null,
        newClassComponent: false,
        showModal: false,
        isClass: true,
        selectedDay: null,
        eventModalMonth: null,
        eventModalYear: null,
        mode: null,
        events: [],
        dataGrabbed: false,
        allUsers: [],
        userIndex: 0,
        homeworkID: null,
        homeworkName: null,
        notesID: null,
        classPage: "Home",
        showUserModal: false,
        semesters: [],
        semesterIndex: 0,
        semestersLoaded: false,
        showSemesterModal: false,
        classID: null,
        classIndex: null,
      }
    },
    async mounted() {
      await this.loadData();
    },
    methods: {
      navigateToHome() {
        this.currentPage = "Calendar"
      },
      navigateToClass(classID, className, classPage) {
        this.classID = classID
        this.clickClass = className
        this.classPage = classPage
        this.currentPage = "Class"
      },
      navigateToHomework(homeworkID, homeworkName) {
        this.currentPage = "Homework"
        this.homeworkID = homeworkID
        this.homeworkName = homeworkName
      },
      navigateToNotes(notesID, parentClassID, parentClassName) {
        this.currentPage = "Notes"
        this.notesID = notesID
        this.classID = parentClassID
        this.clickClass = parentClassName
      },
      openModal(data) {
        this.mode = data[0]
        this.showModal = true
        this.info = data[1]
      },
      openUserModal() {
        this.showUserModal = true;
      },
      async closeUserModal(dataOut) {
        this.userIndex = dataOut.userIndex;
        if(dataOut.updateUsers) {
          await this.reloadData();
        }
        this.showUserModal = false;
      },
      async closeSemesterModal(needsUpdate) {
        if(needsUpdate) {
          await this.reloadData();
        }
        this.semesterIndex = 0;
        this.showSemesterModal = false;
      },
      async loadData() {
        this.dataGrabbed = false;
        await this.reloadData();
        this.dataGrabbed = true;
      },
      async reloadData() {
        await getAllUsers().then(us => {
          this.allUsers = us;
        });
        await getSemestersByUser(this.allUsers[this.userIndex].userID).then(se => {
          this.semesters = se;
        });
        await getClassesByUser(this.allUsers[this.userIndex].userID).then(cs => {
          this.classes = cs;
        });
        if(this.semesters.length > 0) {
          await getClassByUserAndSemester(this.allUsers[this.userIndex].userID, this.semesters[this.semesterIndex].semesterId).then(cs => {
            this.classesForSideBar = cs;
          });
          this.semestersLoaded = true;
        } else {
          this.classesForSideBar = [];
          this.semestersLoaded = false;
        }
        await getEventsByUser(this.allUsers[this.userIndex].userID).then(es => {
          this.events = es;
        });
      },
      changeSemesterIndex(newIndex) {
        if(newIndex < 0) {
          this.semesterIndex = this.semesters.length - 1;
        } else if(newIndex > this.semesters.length - 1) {
          this.semesterIndex = 0;
        } else {
          this.semesterIndex = newIndex;
        }
        this.reloadData();
      },
      endModal() {
        this.showModal = false;
        this.reloadData();
      }
    }
  }
</script>

<template>
  <body v-if="dataGrabbed === true">
    <div class="topBar">
      <button class="homeButton" @click="navigateToHome">Student Helper</button>
      <button class="userButton" @click="openUserModal">{{ this.allUsers[userIndex].userName }}</button><br>
    </div>
    <div class="sideBar"> 
      <div class="semester_buttons" @click="changeSemesterIndex(this.semesterIndex + 1)"><</div>
      <h1>{{ semestersLoaded ? semesters[semesterIndex].semesterName : "" }}</h1>
      <div class="semester_buttons" @click="changeSemesterIndex(this.semesterIndex - 1)">></div>
      <hr><hr>
      <div v-for="(event, index) in classesForSideBar">
        <div>
          <button class="class_button" :class="{ button: event.name }" @click="navigateToClass(event.classID, event.name, 'Home')">{{ event.name }}</button>
        </div>
      </div>
      <button v-if="this.semesters.length !== 0" class="add_button" @click="openModal(['addClass', null])">Add Class</button>
      <button v-if="this.semesters.length !== 0" class="add_button" @click="openModal(['addEvent', null])">Add Event</button>
      <button v-if="this.semesters.length === 0" class="add_event" @click="openModal(['addEvent', null])">Add Event</button>
      <button class="semester_button" @click="this.showSemesterModal = true">Manage Semesters</button>
    </div>
    <div class="mainScreen">
      <Calendar v-if="currentPage === 'Calendar'" @openModal="openModal" @navigateToClass="navigateToClass" :events="events" :classes="classes"/>
      <div v-for="(event, index) in classes">
        <Class v-if="currentPage === 'Class' && event.name === clickClass" :classID="event.classID" :currentClass="event.name" :classPage="this.classPage" @openModal="openModal(['editClass', null])" @navigateToHomework="navigateToHomework" @navigateToNotes="navigateToNotes"/>
      </div>
      <Homework v-if="currentPage === 'Homework'" :homeworkID="this.homeworkID" :homeworkName="this.homeworkName" :parentClass="classID" :userID="this.allUsers[this.userIndex]" @navigateToClass="navigateToClass"/>
      <Notes v-if="currentPage === 'Notes'" :notesID="this.notesID" :parentClassID="classID" :parentClassName="clickClass" @navigateToClass="navigateToClass"/>
    </div>
    <modal v-if="showModal" :mode="this.mode" :info="this.info" :user="this.allUsers[this.userIndex]" :semesters="this.semesters" :semesterIndex="this.semesterIndex" :Class="this.classesForSideBar[this.classIndex]" @close="endModal" @navigateToClass="navigateToClass" @navigateToHome="navigateToHome"/>
    <UsersModal v-if="showUserModal" :Users="this.allUsers" :UserIndex="this.userIndex" @closeUserModal="this.closeUserModal"></UsersModal>
    <SemestersModal v-if="showSemesterModal" :Semesters="this.semesters" :User="this.allUsers[this.userIndex]" @closeSemesterModal="this.closeSemesterModal"></SemestersModal>
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
    color: white;
    height: 60%;
    top: 20%;
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
    overflow-y: scroll;
  }
  .sideBar .semester_buttons {
    color: white;
    font-size: 30px;
    display: inline-flex;
    margin: 20px;
    width: 5%;
    cursor: pointer;
    justify-content: center;
  }
  .sideBar h1 {
    text-align: center;
    color: white;
    display: inline-flex;
    width: 63%;
    justify-content: center;
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
  .sideBar .add_event {
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
    width: 88%;
  }
  .sideBar .semester_button {
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
    width: 88%;
  }
  .sideBar li {
    list-style-type: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>