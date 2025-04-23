<script>
    import { User } from '../data/Model/User';
    export default {
        data() {
            return {
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
            }
        }
    }
</script>
<template>
    <div class="backdrop">
        <div class="modal">
            <div v-if="!this.showEditPage" class="userSelection">
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
                            <td><button @click="this.closeModal(true, index)">{{ user.userName }}</button></td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button class = "cancelButton" @click="this.closeModal(false, this.userIndex)">Cancel</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .modal {
        position: relative;
        width: 1000px;
        height: 700px;
        overflow-y: scroll;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
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
        bottom: 20px;
        left: 20px;
        right: 20px;
        text-align: right;
    }
    .cancelButton {
        background-color: red;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    }
</style>