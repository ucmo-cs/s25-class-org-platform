<script>
export default {
  props: ['notesID', 'parentClass'],
  components: {},
  data() {
    return {
      notes: {
        "0": {"Notes": 0, "Date": "01/01/2001", "FileID": 0},
        "1": {"Notes": 1, "Date": "01/02/2001", "FileID": 1},
        "2": {"Notes": 2, "Date": "02/02/2002", "FileID": 2}
      },
      currentPage: "Notes",
      id: this.notesID,
      note: "This is note 1",
      startDate: "1/1/2001",
      endDate: "1/1/2002",
      file: "http://localhost:5173/src/public/text"
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
    createFile() {
      const link = document.createElement("a");
      const content = document.querySelector("textarea").value;
      const file = new Blob([content], { type: 'text/plain' });
      link.href = URL.createObjectURL(file);
      link.download = "note.txt";
      link.click();
      URL.revokeObjectURL(link.href);
    },
  }
}
</script>

<template>
  <body>
  <div class="notesButtons">
    <button v-if="currentPage === 'Notes' && parentClass !== null" @click="getClassNotes"><</button>
    <h2 v-if="currentPage === 'Notes' && notesID !== 'New Note'">{{ parentClass + " Notes" }}</h2>
    <div class="space"></div>
    <button v-if="currentPage === 'Notes' && notesID !== 'New Note'" @click="createFile">Save</button>
  </div>
  <h1>{{ this.id }}</h1>
  <hr>
  <div class="subPages" >
    <h2>Note:</h2>
    <v-row justify="center">
      <v-col lg="9">
        <v-textarea variant="solo" :model-value="this.note"></v-textarea>
      </v-col>
    </v-row>
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