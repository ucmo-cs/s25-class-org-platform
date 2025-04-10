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
        Classes: ["Class A", "Class B", "Class C"],
        clickClass: "None",
        newClassComponent: false,
        showModal: false,
        isClass: true
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
      <h1>{{ semester }}</h1>
      <hr>
      <button class="class_button" v-for="className in Classes" :class="{ button: className }" @click="navigateToClass(className)">
        <p>{{ className }}</p>
        <hr>
      </button>
      <button class="add_button" @click="openModal(true)">Add Class</button>
      <br>
      <button class="add_button" @click="openModal(false)">Create Event</button>
    </div>
    <div class="mainScreen">
      <Calendar v-if="currentPage === 'Calendar'" />
      <div v-for="className in Classes">
        <Class v-if="currentPage === 'Class' && className === clickClass" :currentClass="this.clickClass"/>
      </div>
      
    </div>
    <modal v-if="showModal" :isClass="isClass" @close="showModal = false">
        <template v-slot:default>
          <p></p>
        </template>
    </modal>
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
    margin-left: 0;
    width: 300px;
    height: 100%;
    background: #2c3e50;
    position: fixed;
  }
  .sideBar h1 {
    text-align: center;
    color: white;
  }
  .sideBar .class_button {
    background-color: transparent;
    width: 300px;
    height: 50px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border: none;
  }
  .sideBar .add_button {
    background-color: green;
    color: white;
    padding: 15px 20px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto;
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