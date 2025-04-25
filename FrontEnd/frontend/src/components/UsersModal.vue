<script>
    import { addUser, deleteUser, updateUsername } from '@/data/api';
import { User } from '../data/Model/User';
import { getClassesByUser } from '../data/api';
    export default {
        data() {
            return {
                userID: null,
                userName: null,
                showEditPage: false,
                editing: false,
            }
        },
        props: {
            Users: {
                type: Array,
                required: true
            },
            UserIndex: {
                type: Number,
                required: true
            }
        },
        methods: {
            closeModal(updateUser, newIndex) {
                this.$emit("closeUserModal", {updateUsers: updateUser, userIndex: newIndex});
            },
            showEditUser(index) {
                this.userName = this.Users[index].userName;
                this.userID = this.Users[index].userID;
                this.showEditPage = true;
                this.editing = true;
            },
            goBack() {
                this.userName = null;
                this.userID = null;
                this.showEditPage = false;
                this.editing = false;
            },
            showAddUser() {
                this.showEditPage = true;
                this.editing = false;
            },
            async addNewUser() {
                await addUser(new User(null, this.userName));
                this.closeModal(true, this.UserIndex);
            },
            async updateUser() {m
                await updateUsername(this.userID, this.userName);
                this.closeModal(true, this.UserIndex);
            },
            async deleteUserModal(index) {
                if(await getClassesByUser(this.Users[index].userID).then(us => {return us.length > 0})) {
                    if(!window.confirm("This user has classes. Are you sure you want to delete it?")) {
                        return;
                    }
                }
                await deleteUser(this.Users[index].userID);
                this.closeModal(true, this.UserIndex);
            }
        }
    }
</script>
<template>
    <div class="backdrop">
        <div class="modal">
            <div v-if="!this.showEditPage" class="userSelection">
                <h2>Users</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Select a User</td>
                            <td>Edit User</td>
                            <td>Delete User</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in this.Users">
                            <td><button class="selectButton" @click="this.closeModal(true, index)">{{ user.userName, index }}</button></td>
                            <td><button class="editButton" @click="this.showEditUser(index)">Edit</button></td>
                            <td><button class="deleteButton" @click="this.deleteUserModal(index)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="this.showEditPage">
                <h2>{{ this.editing ? "Edit User" : "Add new User" }}</h2>
                <p>User Name:</p>
                <v-text-field v-model="this.userName"></v-text-field>
            </div>
            <div class="modal-footer">
                <button v-if="this.showEditPage" class = "blueButton" @click="this.goBack()">Back</button>
                <button v-if="!this.showEditPage" class="greenButton" @click="this.showAddUser()">Add User</button>
                <button v-if="this.showEditPage" class="greenButton" @click="this.editing ? this.updateUser() : this.addNewUser() ">{{ this.editing ? "Save User" : "Add User" }}</button>
                <button class = "redButton" @click="this.closeModal(false, this.UserIndex)">Cancel</button>
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