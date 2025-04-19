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
export async function getAllSemesters() {
    const res = await axios.get(`${baseURL}semester/all`);

    return res.data as Semester[];
}

export async function getSemesterByID(semesterID: Number) {
    const res = await axios.get(`${baseURL}semester/byID${semesterID}`);

    return res.data as Semester;
}

export async function addNewSemester(semester: Semester) {
    const res = await axios.post(`${baseURL}semester/`, semester);

    return res.data;
}

export async function deleteSemester(semesterID: Number) {
    const res = await axios.delete(`${baseURL}semester/${semesterID}`);

    return res.data;
}

export async function updateSemesterName(semesterID: Number, semesterName: Semester) {
    const res = await axios.put(`${baseURL}semester/${semesterID}`,semesterName);

    return res.data;
}

//The functions for meetingtimes API
export async function getAllMeetingTimes() {
    const res = await axios.get(`${baseURL}MeetingTimes/all/`);

    return res.data as MeetingTimes[];
}

export async function getMeetingTimesByID(meetingTimesID: Number) {
    const res = await axios.get(`${baseURL}MeetingTimes/${meetingTimesID}`);

    return res.data as MeetingTimes;
}

export async function addMeetingTimes(meetingTimes: MeetingTimes) {
    const res = await axios.post(`${baseURL}MeetingTimes/`, meetingTimes);

    return res.data;
}

export async function deleteMeetingTimes(meetingTimesID: Number) {
    const res = await axios.delete(`${baseURL}MeetingTimes/${meetingTimesID}`);

    return res.data;
}

export async function updateMeetingTimes(meetingTimes: MeetingTimes) {
    const res = await axios.put(`${baseURL}MeetingTimes/`, meetingTimes);

    return res.data;
}

//The functions for class API
export async function getAllClasses() {
    const res = await axios.get(`${baseURL}class/all`);

    return res.data as Class[];
}

export async function getClassByID(classID: Number) {
    const res = await axios.get(`${baseURL}class/${classID}`);

    return res.data as Class;
}

export async function addClass(classToAdd: Class) {
    const res = await axios.post(`${baseURL}class/`, classToAdd);

    return res.data;
}

export async function deleteClass(classID: Number) {
    const res = await axios.delete(`${baseURL}class/${classID}`);

    return res.data;
}

export async function updateClass(classToModify: Class) {
    const res = await axios.put(`${baseURL}class/`, classToModify);

    return res.data;
}

//The functions for events api
export async function getEventsByUser(userID: Number) {
    const res = await axios.get(`${baseURL}event/byUser${userID}`);

    return res.data as Event[];
}

export async function getEventsByClass(classID: Number) {
    const res = await axios.get(`${baseURL}event/byClass${classID}`);

    return res.data as Event[];
}

export async function addEvent(event: Event) {
    const res = await axios.post(`${baseURL}event/`, event);

    return res.data;
}

export async function addEventWithFile(event: Event, file) {
    const fileID = await axios.post(`${baseURL}file/`, file);

    event.file = fileID.data;
    const res = await axios.post(`${baseURL}event/`);

    return res.data;
}

export async function deleteEvent(eventID: Number) {
    const res = await axios.delete(`${baseURL}event/${eventID}`);

    return res.data;
}

export async function updateEvent(event: Event) {
    const res = await axios.put(`${baseURL}event/`, event);

    return res.data;
}

//Functions for notes api
export async function getNotesByClassID(classID: Number) {
    const res = await axios.get(`${baseURL}notes/${classID}`);

    return res.data as Notes[];
}

export async function addNewNotes(notes: Notes) {
    const res = await axios.post(`${baseURL}notes/`, notes);

    return res.data;
}

export async function addNewNotesWithFile(notes: Notes, file) {
    const fileID = await axios.post(`${baseURL}file/`, file);
    notes.notes = fileID.data;

    const res = await axios.post(`${baseURL}notes/`, notes);

    return res.data;
}

export async function deleteNotes(notesID: Notes) {
    const res = await axios.delete(`${baseURL}notes/${notesID}`);

    return res.data;
}

export async function updateNotes(notes: Notes) {
    const res = await axios.put(`${baseURL}notes/`, notes);

    return res.data;
}

//Functions for file api
export async function getFile(fileID: Number) {
    const res = await axios.get(`${baseURL}file/${fileID}`);

    return res.data as File;
}

export async function updateFile(fileID: Number, file) {
    const res = await axios.put(`${baseURL}file/${fileID}`, file);

    return res.data;
}

//Before calling this function, update the object that owns the file to have thier file id as null
//Or delete the item, or you'll get an error
export async function deleteFile(fileID: Number) {
    const res = await axios.delete(`${baseURL}file/${fileID}`);

    return res.data;
}