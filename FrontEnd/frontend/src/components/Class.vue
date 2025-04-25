<script>
import {getEventsByClassAndIsFavorite, getNotesByClassID, getNotesByClassIDAndIsFavorite, getEventsByClass} from "@/data/api.js";
import {Event} from "@/data/Model/Event.js";
import {Notes} from "@/data/Model/Notes.js";

  export default {
    components: {
    },
    props: ['currentClass', 'classPage'],
    data() {
      return {
        currentPage: this.$props.classPage,
        favorites: [],
        notes: [],
        homework: [],
        newSyllabus: false,
        file: "http://localhost:5173/src/public/CS4920SyllabusSpring2025.pdf"
      }
    },
    mounted() {
      this.fetchFavorites();
      this.fetchNotes();
      this.fetchHomework();
    },
    methods: {
      getHome() {
        this.currentPage = "Home"
      },
      getFavorites() {
        this.currentPage = "Favorites"
      },
      getNotes() {
        this.currentPage = "Notes"
      },
      getHomework() {
        this.currentPage = "Homework"
      },
      getSyllabus() {
        this.currentPage = "Syllabus"
      },
      toggleFav(item) {
        item.favorite = !item.favorite
      },
      callModal() {
        this.$emit('openModal', ['editClass', this.currentClass]);
      },
      goToHomework(homework) {
        this.$emit('navigateToHomework', homework, this.currentClass)
      },
      goToNotes(item) {
        this.$emit('navigateToNotes', item, this.currentClass)
      },
      addItem(type) {
        if (type === "Homework") {
          this.homework = new Event(null, "New Homework", null, null, null, this.currentClass, null, true, null, false)
          this.goToHomework(this.homework)
        } else if (type === "Notes") {
          this.notes = new Notes("New Note", this.currentClass, null, null, false)
          this.goToNotes(this.notes)

        } else if (type === "Syllabus") this.newSyllabus = !this.newSyllabus
      },
      uploadSyllabus() {
        console.log("ADD API CALL TO UPLOAD SYLLABUS HERE")
      },
      async fetchFavorites() {
        await getEventsByClassAndIsFavorite(this.currentClass.classID, true).then(fe => {
          this.favoriteEvents = fe;
        })
        await getNotesByClassIDAndIsFavorite(this.currentClass.classID, true).then(fn => {
          this.favoriteNotes = fn;
        })
        this.favorites = this.favorites.concat(this.favoriteEvents)
        this.favorites = this.favorites.concat(this.favoriteNotes)
        return this.favorites
      },
      async fetchNotes() {
        this.notes = await getNotesByClassID(this.currentClass.classID);
      },
      async fetchHomework() {
        this.homework = (await getEventsByClass(this.currentClass.classID));
        this.homework = this.homework.filter((homework) => homework.homework)
      }
    },
  }
</script>

<template>
  <body>
  <div class="classButtons">
    <button v-if="currentPage !== 'Home'" @click="getHome"><</button>
    <h2 class="classButtons" v-if="currentPage !== 'Home'">{{ currentClass.name }}</h2>
    <div class="space"></div>
    <button v-if="currentPage === 'Home'" @click="callModal">Class Details</button>
    <div class="add">
      <button class="add" v-if="currentPage === 'Notes' || currentPage === 'Homework' || currentPage === 'Syllabus' && !newSyllabus" @click="addItem(this.currentPage)">Add {{ currentPage }}</button>
      <button class="add" v-if="newSyllabus && currentPage === 'Syllabus'" @click="uploadSyllabus">Save Syllabus</button>
    </div>
  </div>
  <h1 v-if="currentPage === 'Home'">
    {{ currentClass.name }}
  </h1>
  <h1 v-if="currentPage !== 'Home'">
    {{ currentPage }}
  </h1>
  <hr>
  <div class="classHome" v-if="currentPage === 'Home'">
    <button @click="getFavorites">Favorites</button>
    <button @click="getNotes">Notes</button>
    <button @click="getHomework">Homework</button>
    <button @click="getSyllabus">Syllabus</button>
  </div>
  <div class="subPages" v-if="currentPage === 'Favorites'">
    <li v-for="item in this.favorites" class="subPages">
      <button class="subPages" v-if="item.favorite" @click="toggleFav(item)">★</button>
      <button class="subPages" v-if="!item.favorite" @click="toggleFav(item)">☆</button>
      <h2 class="subPages">{{ item.name }}</h2>
      <h3 class="subPages">{{ item.type }}</h3>
    </li>
  </div>
  <div class="subPages" v-if="currentPage === 'Notes'">
    <li class="subPages" v-for="item in this.notes">
      <button class="subPages" v-if="item.favorite" @click="toggleFav(item)">★</button>
      <button class="subPages" v-if="!item.favorite" @click="toggleFav(item)">☆</button>
      <h2 class="subPages" @click="goToNotes(item, currentClass)">{{ item.notesID }}</h2>
      <h2 class="subPages" style="color: #2c3e50">{{ item.date }}</h2>
    </li>
  </div>
  <div class="subPages" v-if="currentPage === 'Homework'">
    <li class="subPages" v-for="item in this.homework">
      <button class="subPages" v-if="item.favorite" @click="toggleFav(item)">★</button>
      <button class="subPages" v-if="!item.favorite" @click="toggleFav(item)">☆</button>
      <h2 class="subPages" @click="goToHomework(item, currentClass)">{{ item.name }}</h2>
    </li>
  </div>
  <div class="subPages" v-if="currentPage === 'Syllabus'">
    <iframe v-if="file !== null && !newSyllabus" :src="this.file" width="100%" height="1000px"></iframe>
    <v-row justify="center" v-if="newSyllabus"><v-col lg="9"><v-file-upload></v-file-upload></v-col></v-row>
  </div>
  </body>
</template>

<style scoped>
  html, body {
    display: block;
    text-align: center;
    margin-bottom: 150px;
  }
  h1 {
    font-size: 75px;
  }
  .classButtons {
    display: flex;
  }
  .classButtons button {
    cursor: pointer;
    height: 50px;
    width: 150px;
    outline: none;
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    display: block;
    border-radius: 5px;
    font-size: 20px;
    background-color: green;
    color: white;
  }
  .classButtons .add button {
    width: max-content;
    padding-left: 20px;
    padding-right: 20px;
  }
  .classButtons h2 {
    width: 100%;
    font-size: 25px;
    text-align: left;
    height: 50px;
    padding-top: 17px;
  }
  .classButtons .space {
    height: 50px;
    width: 100%;
  }
  .classHome button {
    background-color: white;
    font-size: 30px;
    text-align: center;
    height: 75px;
    width: 75%;
    margin: 10px auto;
    cursor: pointer;
    border: 2px solid #222222;
    color: #222222;
  }
  .subPages li {
    list-style-type: none;
    background-color: #53708d;
    width: 75%;
    height: 75px;
    margin: 10px auto;
    padding-left: 10px;
    object-position: left;
    color: white;
    text-align: left;
    border: black;
  }
  .subPages h2 {
    display: inline;
    cursor: pointer;
    height: 75px;
    font-size: 30px;
    margin-left: 50px;
  }
  .subPages h3 {
    display: inline;
    height: 75px;
    font-size: 30px;
    margin-left: 50px;
    color: #2c3e50;
  }
  .subPages button {
    object-position: left;
    align-items: start;
    display: inline;
    font-size: 50px;
    border: none;
    cursor: pointer;
    color: white;
    background: none;
  }
  .subPages .syllabus {
    overflow: scroll;
    width: 100%;
    height: 100%;
  }
  hr {
    border-width: 2px;
    border-color: black;
    margin-left: 12.5%;
    width: 75%;
    margin-bottom: 10px;
  }
  iframe {
    width: 75%;
  }
</style>