<script>
  import Calendar from './components/Calendar.vue'
  import Class from "./components/Class.vue";

  export default {
    components: {
      Calendar,
      Class
    },
    data() {
      return {
        currentPage: "Calendar",
        semester: "Spring 2025"
      }
    },
    methods: {
      navigateToHome() {
        this.currentPage = "Calendar"
      },
      navigateToClass(className) {
        this.currentPage = "Class"
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
      <button @click="navigateToClass(className)">Class</button>
      <hr>
      <button @click="navigateToClass(className)">Class</button>
      <hr>
      <button @click="navigateToClass(className)">Class</button>
      <hr>
    </div>
    <div class="mainScreen">
      <Calendar v-if="currentPage === 'Calendar'" />
      <Class v-if="currentPage === 'Class'" />
    </div>
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
    width: 100%;
    height: 100%;
    position: fixed;
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
    font-size: 25px;
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
  .sideBar button {
    background-color: #2c3e50;
    width: 300px;
    height: 50px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border: none;
  }
</style>