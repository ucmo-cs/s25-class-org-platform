<script>
import {
  addNewNotesWithFile,
  updateNotes,
  updateFile,
  getFile,
  deleteNotes,
  deleteFile
} from "@/data/api.js";

export default {
  props: ['note', 'parentClass'],
  components: {},
  data() {
    return {
      notes: {},
      currentPage: "Notes",
      message: null,
      startDate: "1/1/2001",
      endDate: "1/1/2002",
      blob: null,
    }
  },
  mounted() {
    this.getFile()
  },
  methods: {
    getHome() {
      this.currentPage = "Home"
      return this.notes
    },
    getNotes(notesID) {
      return this.notes[notesID]
    },
    getClassNotes() {
      this.$emit('navigateToClass', this.parentClass, "Notes")
    },
    createFile(download) {
      const content = document.querySelector("textarea").value
      const blob = new Blob([content], { type: 'text/plain' });
      const form = new FormData();
      form.append('file', blob, "note.txt");

      if (download) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "note.txt";
        link.click();
        URL.revokeObjectURL(link.href);
      }
      this.blob = form
    },
    async createNote() {
      this.createFile(false);
      try {
        this.note.notesID = null
        this.note.date = new Date()
        await addNewNotesWithFile(this.note, this.blob);
      } catch (err) {}
      this.getClassNotes()
    },
    async updateNote() {
      this.createFile(false);
      if (this.note.notes === null){
        try{
          await addNewNotesWithFile(this.note, this.blob)
        }catch (err) {}
      } else {
        try {
          await updateFile(this.note.notes, this.blob)
          this.note.date = new Date()
          await updateNotes(this.note);
        } catch (err) {}
      }
      this.getClassNotes()
    },
    async getFile() {
      if (this.note.notes !== null) {
        try{
          const res = await getFile(this.$props.note.notes)
          this.message = atob(atob(res.data))
        } catch (err) {}
      }
    },
    async deleteNote() {
      try{
        const fileID = this.note.notes
        if (this.note.notes !== null) {
          this.note.notes = null
          await updateNotes(this.note)
          await deleteFile(fileID)
        }
        await deleteNotes(this.note.notesID)
      } catch (err) {}
      this.getClassNotes()
    }
  }
}
</script>

<template>
  <body>
  <div class="notesButtons">
    <button v-if="currentPage === 'Notes'" @click="getClassNotes"><</button>
    <h2 v-if="currentPage === 'Notes'">{{ parentClass.name + " Notes" }}</h2>
    <div class="space"></div>
    <button @click="createFile(true)">Download</button>
    <button v-if="currentPage === 'Notes' && note.notesID !== 'New Note'" @click="updateNote">Save</button>
    <button v-if="currentPage === 'Notes' && note.notesID === 'New Note'" @click="createNote">Create</button>

  </div>
  <h1>{{ this.note.notesID }}</h1>
  <hr>
  <div class="subPages" >
    <h2>Note:</h2>
    <v-row justify="center">
      <v-col lg="9">
        <v-textarea auto-grow variant="solo" v-model="message" placeholder="Begin Note Here"></v-textarea>
      </v-col>
    </v-row>
    <button v-if="note.notesID !== 'New Note'" @click="deleteNote">Delete</button>
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
h1 {
  font-size: 75px;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  display: block;
}
.notesButtons {
  display: flex;
}
.notesButtons button {
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
.notesButtons h2 {
  width: 100%;
  font-size: 25px;
  text-align: left;
  height: 50px;
  padding-top: 17px;
}
.notesButtons .space {
  height: 50px;
  width: 100%;
}
.notesHome button {
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
  cursor: default;
  display: flex;
  height: max-content;
  font-size: 30px;
  margin-left: 12%;
  margin-right: 12%;
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