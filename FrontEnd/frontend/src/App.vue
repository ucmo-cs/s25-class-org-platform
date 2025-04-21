<script>
  import Calendar from './components/Calendar.vue'
  import Class from "./components/Class.vue";
  import Modal from "./components/Modal.vue"

  export default {
    components: {
      Calendar,
      Class,
      Modal,
    },
    data() {
      return {
        currentPage: "Calendar",
        semester: "Spring 2025",
        Classes: ["Algorithms", "Operating Systems", "Senior Project", "Call of Duty Zombies"],
        clickClass: "None",
        newClassComponent: false,
        showModal: false,
        isClass: true,
        semesterID: -1,
        selectedDay: null,
        eventModalMonth: null,
        eventModalYear: null,
        mode: null,
        events: [
          { title: "Algorithms", isEvent: false, repeatWeekly: true, weekdays: [1, 3, 5] },
          { title: "Operating Systems", isEvent: false, repeatWeekly: true, weekdays: [1, 3, 5] },
          { title: "Senior Project", isEvent: false, repeatWeekly: true, weekdays: [1, 3, 5] },
          { title: "Call of duty zombies", isEvent: true, repeatWeekly: true, weekdays: [1, 3, 5] },
          { title: "Math Test", isEvent: true, day: 22, month: 4, year: 2025 }
        ]
      }
    },
    methods: {
      navigateToHome() {
        this.currentPage = "Calendar"
      },
      navigateToClass(className) {
        console.log(className)
        this.clickClass = className
        this.currentPage = "Class"
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
  <body>
    <div class="topBar">
      <button @click="navigateToHome">Student Helper</button>
    </div>
    <div class="sideBar"> 
      <div class="semester_buttons" @click="loadSemester(semesterID-1)"><</div>
      <h1>{{ semester }}</h1>
      <div class="semester_buttons" @click="loadSemester(semesterID+1)">></div>
      <hr><hr>
      <div v-for="(event, index) in events">
        <div v-if="event.isEvent === false">
          <button class="class_button" :class="{ button: className }" @click="navigateToClass(event.title)">{{ event.title }}</button>
        </div>
      </div>
      <button class="add_button" @click="openModal(['addClass', null])">Add Class</button>
      <button class="add_button" @click="openModal(['addEvent', null])">Add Event</button>
    </div>
    <div class="mainScreen">
      <Calendar v-if="currentPage === 'Calendar'" @openModal="openModal" @navigateToClass="navigateToClass" :events="events"/>
      <div v-for="className in Classes">
        <Class v-if="currentPage === 'Class' && className === clickClass" :currentClass="this.clickClass" @openModal="openModal(['addClass', null])"/>
      </div>
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
  }
  .topBar button {
    background-color: #222222;
    width: 300px;
    height: 100%;
    color: white;
    font-size: 30px;
    cursor: pointer;
    border: none;
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