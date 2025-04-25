<script>
import { addNewSemester, deleteSemester, getClassByUserAndSemester, updateSemesterName } from '../data/api';
import { Semester } from '../data/Model/Semester';

    export default {
        data() {
            return {
                semesterName: null,
                semesterID: null,
                showEditingPage: false,
                editing: false,
            }
        },
        props: {
            Semesters: {
                type: Array,
                required: true
            },
            User: {
                required: true
            }
        },
        methods: {
            async addSemester() {
                await addNewSemester(new Semester(this.semesterID, this.semesterName, this.User));
                this.$emit('closeSemesterModal', true);
            },
            async editSemester() {
                let semesterOut = new Semester(this.semesterID, this.semesterName, this.User)
                await updateSemesterName(semesterOut);
                this.$emit('closeSemesterModal', true);
            },
            async deleteSemesterModal(index) {
                if(await getClassByUserAndSemester(this.User.userID, this.Semesters[index].semesterId).then(cs => {return cs.length > 0})) {
                    if(!window.confirm("This semester has classes. Are you sure you want to delete it?")) {
                        return;
                    }
                }
                await deleteSemester(this.Semesters[index].semesterId);
                this.$emit('closeSemesterModal', true);
            },
            goBack() {
                this.semesterName = null;
                this.semesterID = null,
                this.showEditingPage = false;
                this.editing = false;
            },
            showEditSemester(index) {
                this.semesterName = this.Semesters[index].semesterName;
                this.semesterID = this.Semesters[index].semesterId;
                this.showEditingPage = true;
                this.editing = true;
            },
            showAddSemester() {
                this.showEditingPage = true;
                this.editing = false;
            },
        }
    }
</script>
<template>
    <div class="backdrop">
        <div class="modal">
            <div v-if="!this.showEditingPage">
                <h2>Semesters</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Semester</td>
                            <td>Edit Semester</td>
                            <td>Delete Semester</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(semester, index) in this.Semesters">
                            <td>{{ semester.semesterName }}</td>
                            <td><button class="editButton" @click="showEditSemester(index)">Edit</button></td>
                            <td><button class="deleteButton" @click="deleteSemesterModal(index)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="this.showEditingPage">
                <h2>{{  this.editing ? "Edit Semester" : "Add new Semester" }}</h2>
                <p>Semester Name: </p>
                <v-text-field v-model="this.semesterName"></v-text-field>
            </div>
            <div class="modal-footer">
                <button v-if="this.showEditingPage" class = "blueButton" @click="this.goBack()">Back</button>
                <button v-if="!this.showEditingPage" class="greenButton" @click="showAddSemester">Add Semester</button>
                <button v-if="this.showEditingPage" class="greenButton" @click="this.editing ? this.editSemester() : this.addSemester() ">{{ this.editing ? "Save Semester" : "Add Semester" }}</button>
                <button class = "redButton" @click="this.$emit('closeSemesterModal', false);">Cancel</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .modal {
        position: relative;
        width: 700px;
        overflow-y: scroll;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    h2 {
        margin-top: 0;
        color: black;
        font-size: x-large;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal-footer {
        position: relative;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: right;
    }
    .greenButton {
        background-color: green;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    }
    .editButton {
        background-color: green;
        color: white;
        text-decoration: none;
        font-size: 14px;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }
    .blueButton {
        background-color: #53708d;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    
    }
    .selectButton {
        background-color: #53708d;
        color: white;
        text-decoration: none;
        font-size: 14px;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }
    .redButton {
        background-color: red;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    }
    .deleteButton {
        background-color: red;
        color: white;
        text-decoration: none;
        font-size: 14px;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }
    .greenButton, .blueButton, .redButton {
        margin-left: 10px
    }
    table{
      border: 2px solid #2c3e50;
      border-collapse: collapse;
      height: 100%;
      border-radius:5px;
    }
    th{
      border: 1px solid #2c3e50;
      text-align: center;
      background-color: white;
      font-weight: normal;
      border-radius:5px;
    }
    td{
      text-align: left;
      background-color: white;
      border-left: 1px solid #2c3e50;
      border-right: 1px solid #2c3e50;
      border-bottom: 1px solid #2c3e50;
      width: 250px;
      text-align: center;
      border-radius:5px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
</style>