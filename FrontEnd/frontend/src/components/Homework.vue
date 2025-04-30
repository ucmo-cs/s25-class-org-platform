<script>
import {
  addEvent,
  addEventWithFile,
  addFile,
  deleteEvent,
  deleteFile,
  getEventsByClass,
  getFile,
  updateEvent,
  updateFile
} from "@/data/api.js";
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
    }
  },
  mounted() {
    this.getFile()
    this.setFile()
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
        const formData = new FormData
        formData.append("file", this.fileURL, this.fileURL.name)
        const newHomework = new Event(null, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, null, false)
        await addEventWithFile(newHomework, formData)
      } else {
        const newHomework = new Event(null, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, null, false)
        await addEvent(newHomework)
      }
      this.getClassHomework()
    },
    async updateHomework() {
      if (this.fileURL) {
        const formData = new FormData
        formData.append("file", this.fileURL, this.fileURL.name)
        if (this.homework.file !== null) {
          const newHomework = new Event(this.homework.eventID, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, this.homework.file, this.homework.isFavorite)
          await updateFile(this.homework.file, formData)
          await updateEvent(newHomework)
        } else {
          const res = await addFile(formData)
          const newHomework = new Event(this.homework.eventID, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, res, this.homework.isFavorite)
          await updateEvent(newHomework)
        }
      } else {
        const newHomework = new Event(this.homework.eventID, this.name, this.description, this.dueDate, this.dueDate, this.$props.parentClass, this.userID, true, this.homework.file, this.homework.isFavorite)
        await updateEvent(newHomework)
      }
      this.getClassHomework()
    },
    async getFile() {
      try {
        const res = await getFile(this.$props.homework.file);
        const binaryString = atob(atob(res.data));
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          byteArray[i] = binaryString.charCodeAt(i);
        }
        const mimeType = this.getMimeType("filename.pdf")
        const blob = new Blob([byteArray], { type: mimeType });
        document.getElementById("pdfFrame").src = URL.createObjectURL(blob);

      } catch (err) {}
    },
    async deleteHomework() {
      try{
        if (this.homework.file !== null) {
          const fileID = this.homework.file
          this.homework.file = null
          await updateEvent(this.homework)
          await deleteFile(fileID)
        }
        await deleteEvent(this.homework.eventID)
      } catch (err) {}
      this.getClassHomework()
    },
    setFile() {
      if (this.homework.file !== null) this.file = true
      if (this.homework.file === null) this.file = false
    },
    getMimeType(filename) {
      const ext = filename.split('.').pop().toLowerCase();
      const types = {
        pdf: 'application/pdf',
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        txt: 'text/plain',
    };
      return types[ext] || 'application/octet-stream';
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
      <iframe id="pdfFrame" width="100%" height="1000px"></iframe>
    </div>
    <v-row justify="center" v-if="file !== true"><v-col lg="9"><v-file-upload clearable v-model="this.fileURL"></v-file-upload></v-col></v-row>
    <button style="background-color: indianred;  margin-right: 400px;" class="subPages;" v-if="homework.eventID !== null" @click="deleteHomework">Delete Homework</button>
    <div v-if="file === false" class="space"></div>
    <button style="background-color: green; margin-left: 400px" v-if="file !== false" @click="toggleNewFile">New File</button>
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
    align-items: start;
    border: none;
    cursor: pointer;
    color: white;
    height: 50px;
    width: 225px;
    margin-top: 10px;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .subPages .space {
    width: 625px;
    display: inline-block;
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