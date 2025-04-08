<script>
export default{
  props: ['currentClass', 'currentPage'],
  data() {
    return {
      currentPage: "home"
    }
  },
  methods: {
    getHome() {
      this.currentPage = "home"
    },
    getFavorites() {
      this.currentPage = "favorites"
    },
    getNotes() {
      this.currentPage = "notes"
    },
    getHomework() {
      this.currentPage = "homework"
    },
    getSyllabus() {
      this.currentPage = "syllabus"
    }
  }
}
</script>

<template>
  <body>
  <div class="classButtons">
    <button v-show="currentPage !== 'home'" @click="getHome"><</button>
    <div class="space"></div>
    <button class="add_button" v-if="currentPage === 'home'">Edit Class</button>
  </div>
  <h1>
    {{ currentClass }}
  </h1>
  <div class="classHome" v-if="currentPage === 'home'">
    <button @click="getFavorites">Favorites</button>
    <button @click="getNotes">Notes</button>
    <button @click="getHomework">Homework</button>
    <button @click="getSyllabus">Syllabus</button>
  </div>
  <div class="favorites" v-if="currentPage === 'favorites'">

  </div>

  </body>
</template>

<style scoped>
  html, body {
    display: block;
    text-align: center;
  }
  h1 {
    font-size: 75px;
  }
  .classButtons {
    background: none;
    display: flex;
  }
  .classButtons button {
    cursor: pointer;
    height: 50px;
    width: 10%;
    outline: none;
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background-color: green;
    color: white;
  }

  .classButtons .space {
    height: 50px;
    width: 100%;
  }
  .classHome {
    background: none;
  }
  .classHome button {
    background: none;
    font-size: 30px;
    text-align: center;
    height: 75px;
    width: 75%;
    margin: 10px auto;
    cursor: pointer;
  }
</style>