<script>
import {
  addFile,
  getEventsByClass,
  getEventsByClassAndIsFavorite,
  getFile,
  getNotesByClassID,
  getNotesByClassIDAndIsFavorite,
  updateClass,
  updateEvent,
  updateFile,
  updateNotes
} from "@/data/api.js";
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
        file: false,
        fileURL: null,
      }
    },
    mounted() {
      this.fetchNotes();
      this.fetchHomework();
    },
    methods: {
      getHome() {
        this.currentPage = "Home"
      },
      getFavorites() {
        this.currentPage = "Favorites"
        this.favorites = []
        this.fetchFavorites()
      },
      getNotes() {
        this.currentPage = "Notes"
      },
      getHomework() {
        this.currentPage = "Homework"
      },
      getSyllabus() {
        this.currentPage = "Syllabus"
        this.getSyllabusFile()
      },
      async toggleFav(item) {
        item.isFavorite = !item.isFavorite
        try {
          if (item.eventID !== undefined) return await updateEvent(item)
        } catch (err) {}
        try {
          if (item.notesID !== undefined) return await updateNotes(item)
        } catch (err) {}
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
        this.homework = this.homework.filter((homework) => homework.isHomework)
      },
      async getSyllabusFile() {
        if (this.$props.currentClass.syllabus !== null) {
          this.file = true
          try {
            const res = await getFile(this.$props.currentClass.syllabus);
            const binaryString = atob(atob(res.data))
            const byteArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
              byteArray[i] = binaryString.charCodeAt(i);
            }
            const mimeType = this.getMimeType("filename.pdf")
            const blob = new Blob([byteArray], { type: mimeType });
            document.getElementById("pdfFrame").src = URL.createObjectURL(blob)
          } catch (err) {}
        } else {
          this.file = false;
          this.newSyllabus = true;
        }
      },
      async uploadSyllabus() {
        const formData = new FormData
        formData.append("file", this.fileURL, this.fileURL.name)
        if (this.$props.currentClass.syllabus === null) {
          this.$props.currentClass.syllabus = await addFile(formData)
          await updateClass(this.$props.currentClass)
        } else {
          await updateFile(this.$props.currentClass.syllabus, formData)
        }
        this.newSyllabus = false
        this.getSyllabus()
      },
      getMimeType(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        const types = {
          pdf: 'application/pdf',
          png: 'image/png',
          jpg: 'image/jpeg',
          jpeg: 'image/jpeg',
          txt: 'text/plain'
        };
        return types[ext] || 'application/octet-stream';
      },
      getID(item) {
        try {
          if (item.name !== undefined) return item.name
        } catch (err) {}
        try {
          if (item.notesID !== undefined) return item.notesID
        } catch (err) {}
      },
      goToPage(item) {
        try {
          if (item.name !== undefined) this.goToHomework(item)
        } catch (err) {}
        try {
          if (item.notesID !== undefined) this.goToNotes(item)
        } catch (err) {}
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
      <button class="subPages" v-if="item.isFavorite" @click="toggleFav(item)">★</button>
      <button class="subPages" v-if="!item.isFavorite" @click="toggleFav(item)">☆</button>
      <h2 class="subPages" @click="goToPage(item)">{{ getID(item) }}</h2>
    </li>
  </div>
  <div class="subPages" v-if="currentPage === 'Notes'">
    <li class="subPages" v-for="item in this.notes">
      <button class="subPages" v-if="item.isFavorite" @click="toggleFav(item)">★</button>
      <button class="subPages" v-if="!item.isFavorite" @click="toggleFav(item)">☆</button>
      <h2 class="subPages" @click="goToNotes(item, currentClass)">{{ item.notesID }}</h2>
      <h2 class="subPages" style="color: #2c3e50; cursor: default">{{ item.date }}</h2>
    </li>
  </div>
  <div class="subPages" v-if="currentPage === 'Homework'">
    <li class="subPages" v-for="item in this.homework">
      <button class="subPages" v-if="item.isFavorite" @click="toggleFav(item)">★</button>
      <button class="subPages" v-if="!item.isFavorite" @click="toggleFav(item)">☆</button>
      <h2 class="subPages" @click="goToHomework(item, currentClass)">{{ item.name }}</h2>
    </li>
  </div>
  <div class="subPages" v-if="currentPage === 'Syllabus'">
    <iframe v-if="file !== false && !newSyllabus" id="pdfFrame" width="100%" height="1000px"></iframe>
    <v-row justify="center" v-if="newSyllabus"><v-col lg="9"><v-file-upload clearable v-model="this.fileURL"></v-file-upload></v-col></v-row>
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