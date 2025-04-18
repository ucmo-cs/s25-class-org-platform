import axios from 'axios';
import { User } from './Model/User';
import { Semester } from './Model/Semester';
import { MeetingTimes } from './Model/MeetingTimes';
import { Class } from './Model/Class';
import { Event } from './Model/Event';
import { Notes } from './Model/Notes';
import { File } from './Model/File';


const baseURL = "http://localhost:8080/"

//Testing function that returns hello world
export async function testConnection() {
    const res = await axios.get(baseURL);

    return res.data as String;
}

//The functions for the user API
export async function getAllUsers() {
    const res = await axios.get(`${baseURL}user/getAll`);

    return res.data as User[];
}

export async function addUser(user: User) {
    console.log(user.userName);
    const res = await axios.post(`${baseURL}user/`, user);

    return res.data;
}

export async function deleteUser(userID: Number) {
    const res = await axios.delete(`${baseURL}user/${userID}`);

    return res.data;
}

export async function updateUsername(userID: Number, newName: String) {
    const res = await axios.put(`${baseURL}user/${userID}`, newName);

    return res.data;
}

//The functions for the semester API