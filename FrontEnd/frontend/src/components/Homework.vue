<script>
  export default {
    props: ['homeworkID', 'parentClass'],
    components: {},
    data() {
      return {
        homework: {
          "0": {"Homework": 0, "Date": "01/01/2001", "FileID": 0},
          "1": {"Homework": 1, "Date": "01/02/2001", "FileID": 1},
          "2": {"Homework": 2, "Date": "02/02/2002", "FileID": 2}
        },
        currentPage: "Homework",
        name: this.homeworkID,
        description: "This is homework 1",
        startDate: "1/1/2001",
        endDate: "1/1/2002",
        file: "http://localhost:5173/src/public/CS4920SyllabusSpring2025.pdf"
      }
    },
    methods: {
      getHome() {
        this.currentPage = "Home"
        return this.homework
      },
      getHomework(homeworkID) {
        return this.homework[homeworkID]
      },
      getClassHomework() {
        this.$emit('navigateToClass', this.parentClass, "Homework")
      },
      getName(val) {
        console.log(val)
      },
    }
  }
</script>

<template>
  <body>
    <div class="homeworkButtons">
      <button v-if="currentPage === 'Homework' && parentClass !== null" @click="getClassHomework"><</button>
      <h2 v-if="currentPage === 'Homework'">{{ parentClass + " Homework" }}</h2>
      <div class="space"></div>
      <button v-if="currentPage === 'Homework' && homeworkID !== 'New Homework'" @click="callModal">Save</button>
      <button v-if="currentPage === 'Homework' && homeworkID === 'New Homework'" @click="callModal">Create</button>
    </div>
    <h1 contenteditable>{{ this.name}}</h1>
    <hr>
    <div class="subPages" >
      <h2>Description:</h2>
      <v-row justify="center">
        <v-col lg="9">
          <v-textarea variant="solo" :model-value="this.description"></v-textarea>
        </v-col>
      </v-row>
      <h2>Start Date:</h2>
      <v-row justify="center">
        <v-col lg="9">
          <v-date-input label="Start Date" prepend-icon="" variant="solo" :model-value="this.startDate"></v-date-input>
        </v-col>
      </v-row>
      <h2>End Date:</h2>
      <v-row justify="center">
        <v-col lg="9">
          <v-date-input label="End Date" prepend-icon="" variant="solo" :model-value="this.endDate"></v-date-input>
        </v-col>
      </v-row>
      <div class="homeworkButtons">
        <h2>File:</h2>
        <space></space>
        <button>New File</button>
      </div>

      <div v-if="file !== null">
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
  }
  .homeworkButtons h2 {
    width: 350px;
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