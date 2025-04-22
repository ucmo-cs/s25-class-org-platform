<script>
export default {
  props: ['notesID', 'parentClass'],
  components: {},
  data() {
    return {
      notes: {
        "0": {"Notes": 0, "Date": "0/0/0", "FileID": 0},
        "1": {"Notes": 1, "Date": "1/1/1", "FileID": 1},
        "2": {"Notes": 2, "Date": "2/2/2", "FileID": 2}
      },
      currentPage: "Notes",
      id: "Notes1",
      description: "This is note 1.",
      startDate: "1/1/2001",
      endDate: "1/1/2002",
      file: "http://localhost:5173/src/public/CS4920SyllabusSpring2025.pdf"
    }
  },
  methods: {
    getHome() {

    },
    getNotes(notesID) {
      return this.notes[notesID]
    },
    getClassNotes() {
      this.$emit('navigateToClass', this.parentClass, "Notes")
    },
    getName(val) {
      console.log(val)
    },
  }
}
</script>

<template>
  <body>
  <div class="notesButtons">
    <button v-if="currentPage === 'Notes'" @click="getClassNotes"><</button>
    <h2 v-if="currentPage === 'Notes'">{{ parentClass + " Notes" }}</h2>
    <div class="space"></div>
    <button v-if="currentPage === 'Notes'" @click="callModal">Save</button>
  </div>
  <h1 contenteditable>{{ this.id }}</h1>
  <hr>
  <div class="subPages" >
    <h2>Notes:</h2>
    <v-row justify="center">
      <v-col lg="9">
        <v-textarea variant="solo" :model-value="this.description"></v-textarea>
      </v-col>
    </v-row>
    <h2>File:</h2>
    <div  v-if="file !== null">
      <iframe :src="this.file" width="100%" height="1000px"></iframe>
    </div>
    <v-row justify="center"><v-col lg="9"><v-file-upload></v-file-upload></v-col></v-row>
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
}
.notesButtons h2 {
  width: 350px;
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
  display: inline;
  font-size: 50px;
  border: none;
  cursor: pointer;
  color: white;
  background: none;
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