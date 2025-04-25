<script>
import {addEvent, addEventWithFile, deleteEvent, getEventsByClass, getFile, updateEvent, updateFile} from "@/data/api.js";
import {Event} from "@/data/Model/Event.js";

export default {
  props: ['homework', 'parentClass', 'userID'],
  components: {},
  data() {
    return {
      dueDate: this.homework.start,
      currentPage: "Homework",
      name: this.homework.name,
      description: this.homework.description,
      file: false,
      newFile: true,
      fileURL: null,
      currentFile: null,
    }
  },
  mounted() {
    this.getFile()
  },
  methods: {
    getHome() {
      this.currentPage = "Home"
      return null
    },
    getClassHomework() {
      this.$emit('navigateToClass', this.parentClass, "Homework")
    },
    toggleNewFile() {
      this.newFile = !this.newFile
      this.file = !this.file
    },
    async getHomework() {
      await getEventsByClass(this.$props.parentClass)
    },
    async createHomework() {
      if (this.fileURL){
        console.log(fileURL)
        const newHomework = new Event(null, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, null, false)
        await addEventWithFile(newHomework, this.fileURL)
      } else {
        const newHomework = new Event(null, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, null, false)
        console.log(newHomework)
        await addEvent(newHomework)
      }
      this.getClassHomework()
    },
    async updateHomework() {
      if (this.fileURL) {
        const fileID = await updateFile(this.homework.fileID, this.fileURL)
        const newHomework = new Event(null, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, fileID, this.homework.isFavorite)
        await updateEvent(newHomework)
      } else {
        const newHomework = new Event(this.homework.eventID, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, null, this.homework.isFavorite)
        console.log(newHomework)
        await updateEvent(newHomework)
      }
      this.getClassHomework()
    },
    async getFile() {
      try{
        const res = await getFile(this.$props.homework.file)
        console.log(res)
      } catch (err) {
        console.error("No File Exists:", err);
      }
    },
    async deleteHomework() {
      try{
          await deleteEvent(this.homework.eventID)
      } catch (err) {
        console.log("Failed to Delete Homework:", err)
      }
      this.getClassHomework()
    }
  }
}
</script>

<template>
  <body>
  <div class="homeworkButtons">
    <button v-if="currentPage === 'Homework'" @click="getClassHomework"><</button>
    <h2 v-if="currentPage === 'Homework'">{{ parentClass.name + " Homework" }}</h2>
    <div class="space"></div>
    <button v-if="currentPage === 'Homework' && homework.eventID !== null" @click="updateHomework">Save</button>
    <button v-if="currentPage === 'Homework' && homework.eventID === null" @click="createHomework">Create</button>
  </div>
  <input v-model="name">
  <hr>
  <div class="subPages" >
    <h2>Description:</h2>
    <v-row justify="center">
      <v-col lg="9">
        <v-textarea v-model="this.description" variant="solo" label="Description" placeholder="Things to remember about the homework" :model-value="this.description"></v-textarea>
      </v-col>
    </v-row>
    <h2>Due Date:</h2>
    <v-row justify="center">
      <v-col lg="9">
        <v-date-input v-model="this.dueDate" label="Due Date" prepend-icon="" variant="solo" :model-value="this.dueDate"></v-date-input>
      </v-col>
    </v-row>
    <h2>File:</h2>
    <div v-if="file !== false">
      <iframe :src="this.currentFile" width="100%" height="1000px"></iframe>
    </div>
    <button v-if="file !== false" @click="toggleNewFile">New File</button>
    <v-row justify="center" v-if="file !== true"><v-col lg="9"><v-file-upload v-model="this.fileURL"></v-file-upload></v-col></v-row>
    <button class="subPages" v-if="homework.eventID !== null" @click="deleteHomework">Delete</button>
  </div>
  </body>
</template>

<style scoped>
  html, body {
    display: block;
    text-align: center;
    overflow-y: scroll;
    padding-bottom: 150px;
    margin-bottom: 100px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  input {
    font-size: 75px;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    display: block;
    height: 150px;
    justify-self: center;
    text-align: center;
  }
  .homeworkButtons {
    display: flex;
  }
  .homeworkButtons button {
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
    padding-left: 20px;
    padding-right: 20px;
  }
  .homeworkButtons h2 {
    width: 100%;
    font-size: 25px;
    text-align: left;
    height: 50px;
    padding-top: 17px;
  }
  .homeworkButtons .space {
    height: 50px;
    width: 100%;
  }
  .homeworkHome button {
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
  .subPages h2 {
    text-align: left;
    justify-self: left;
    cursor: default;
    display: flex;
    height: max-content;
    width: max-content;
    font-size: 30px;
    margin-left: 12%;
    margin-bottom: 10px;
  }
  .subPages h3 {
    text-align: left;
    padding: 5px;
    font-size: 30px;
    margin-left: 12.5%;
    margin-right: 12.5%;
    color: gray;
  }
  .subPages button {
    object-position: left;
    align-items: start;
    border: none;
    cursor: pointer;
    color: white;
    background-color: indianred;
    height: 50px;
    width: 150px;
    outline: none;
    margin-right: 200px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    display: block;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    justify-self: right;
  }
  hr {
    border-width: 2px;
    border-color: black;
    margin-left: 12%;
    width: 75%;
    margin-bottom: 10px;
  }
  iframe {
    width: 75%;
  }
</style>