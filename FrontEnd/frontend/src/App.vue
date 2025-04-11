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
        Classes: ["Class A", "Class B", "Class C", "Class D"],
        clickClass: "None",
        newClassComponent: false,
        showModal: false,
        isClass: true,
        semesterID: -1,
      }
    },
    methods: {
      navigateToHome() {
        this.currentPage = "Calendar"
      },
      navigateToClass(className) {
        this.clickClass = className
        this.currentPage = "Class"
      },
      openModal(isClass) {
        this.isClass = isClass
        this.showModal = true
      },
      loadSemester(id) {
        // API call for semester data based on semester id. Set data values to dynamically update screen.

      },
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
      <button class="class_button" v-for="className in Classes" :class="{ button: className }" @click="navigateToClass(className)">{{ className }}</button>
      <button class="add_button" @click="openModal(true)">Add Class</button>
      <button class="add_button" @click="openModal(false)">Add Event</button>
    </div>
    <div class="mainScreen">
      <Calendar v-if="currentPage === 'Calendar'" />
      <div v-for="className in Classes">
        <Class v-if="currentPage === 'Class' && className === clickClass" :currentClass="this.clickClass" @openModal="openModal(true)"/>
      </div>
    </div>
    <modal v-if="showModal" :isClass="isClass" @close="showModal = false" />
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
    margin: 22px;
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