package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.*;
import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ClassService {
    final private ClassRepository classRepository;
    final private UserRepository userRepository;
    final private SemesterRepository semesterRepository;
    final private MeetingTimesService meetingTimesService;
    final private NotesService notesService;
    final private EventService eventService;
    final private MeetingTimesRepository meetingTimesRepository;
    final private FileRepository fileRepository;

    @Autowired
    public ClassService(ClassRepository classRepository, UserRepository userRepository, SemesterRepository semesterRepository, MeetingTimesService meetingTimesService, NotesService notesService, MeetingTimesRepository meetingTimesRepository, EventService eventService, FileRepository fileRepository) {
        this.classRepository = classRepository;
        this.userRepository = userRepository;
        this.semesterRepository = semesterRepository;
        this.meetingTimesService = meetingTimesService;
        this.notesService = notesService;
        this.meetingTimesRepository = meetingTimesRepository;
        this.eventService = eventService;
        this.fileRepository = fileRepository;
    }

    public List<Class> getAllClasses() {
        return this.classRepository.findAll();
    }

    public List<Class> getAllByUser(int userID) {
        Optional<User> user = userRepository.findById(userID);

        if(user.isEmpty()) {
            throw new IllegalArgumentException("User does not exist.");
        }
        return classRepository.findAllByUser(user.get());
    }
    public Class getClass(int id) {
        Optional<Class> out = classRepository.findById(id);

        if(out.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        return out.get();
    }

    public List<Class> getClassByUserAndSemester(int userID, int semesterID) {
        Optional<User> user = userRepository.findById(userID);
        Optional<Semester> semester = semesterRepository.findById(semesterID);

        if(user.isEmpty()) {
            throw new IllegalArgumentException("User does not exist.");
        }
        if(semester.isEmpty()) {
            throw new IllegalArgumentException("Semester does not exist.");
        }

        return classRepository.findAllByUserAndSemester(user.get(), semester.get());
    }

    public void addClass(Class in) {
        if(classRepository.findById(in.getClassID()).isPresent()) {
            throw new IllegalArgumentException("Class already exists");
        }
        if(in.getUser() == null) {
            throw new IllegalArgumentException("User must be added");
        }
        if(userRepository.findById(in.getUser().getUserID()).isEmpty()) {
            throw new IllegalArgumentException(("User must exist"));
        }

        if(in.getMeetingTimes() != null) {
            int meetingTimesID = meetingTimesService.addNewMeetingTimes(in.getMeetingTimes());
            in.setMeetingTimes(this.meetingTimesRepository.findById(meetingTimesID).get());
        }
        if(in.getOfficeHours() != null) {
            int officeHoursID = meetingTimesService.addNewMeetingTimes(in.getOfficeHours());
            in.setOfficeHours(this.meetingTimesRepository.findById(officeHoursID).get());
        }

        classRepository.save(in);
    }

    public void deleteClass(int id) {
        if(this.classRepository.findById(id).isEmpty()) {
            throw new IllegalArgumentException("Class does not exist.");
        }
        this.notesService.deleteNotesByClass(id);
        this.eventService.deleteEventsByClass(id);
        this.classRepository.deleteById(id);
    }

    public void deleteClassesByUser(int userID) {
        Optional<User> user = this.userRepository.findById(userID);
        if(user.isEmpty()) {
            throw new IllegalArgumentException("User does not exist.");
        }
        List<Class> classes = this.classRepository.findAllByUser(user.get());
        for(Class class_ : classes) {
            if(class_.getMeetingTimes() != null) {
                this.meetingTimesRepository.deleteById(class_.getMeetingTimes().getMeetingTimesId());
            }
            if(class_.getOfficeHours() != null) {
                this.meetingTimesRepository.deleteById(class_.getOfficeHours().getMeetingTimesId());
            }
            if(class_.getSyllabus() != null) {
                this.fileRepository.deleteById(class_.getSyllabus());
            }
            this.notesService.deleteNotesByClass(class_.getClassID());
            this.eventService.deleteEventsByClass(class_.getClassID());
            this.classRepository.deleteById(class_.getClassID());
        }
    }

    public void deleteClassesBySemester(int semsterID) {
        Optional<Semester> semester = this.semesterRepository.findById(semsterID);
        if(semester.isEmpty()) {
            throw new IllegalArgumentException("Semester does not exist.");
        }
        List<Class> classes = this.classRepository.findAllByUserAndSemester(semester.get().getUser(), semester.get());
        for(Class class_ : classes) {
            if(class_.getMeetingTimes() != null) {
                this.meetingTimesRepository.deleteById(class_.getMeetingTimes().getMeetingTimesId());
            }
            if(class_.getOfficeHours() != null) {
                this.meetingTimesRepository.deleteById(class_.getOfficeHours().getMeetingTimesId());
            }
            if(class_.getSyllabus() != null) {
                this.fileRepository.deleteById(class_.getSyllabus());
            }
            this.notesService.deleteNotesByClass(class_.getClassID());
            this.eventService.deleteEventsByClass(class_.getClassID());
            this.classRepository.deleteById(class_.getClassID());
        }
    }

    @Transactional
    public void modifyClass(Class in) {
        Optional<Class> editingClass = classRepository.findById(in.getClassID());
        if(editingClass.isEmpty()) {
            throw new IllegalArgumentException("Class does not exist");
        }
        if(in.getUser() == null) {
            throw new IllegalArgumentException("User must be added");
        }
        if(userRepository.findById(in.getUser().getUserID()).isEmpty()) {
            throw new IllegalArgumentException(("User must exist"));
        }

        editingClass.get().setName(in.getName());
        editingClass.get().setSemester(in.getSemester());
        editingClass.get().setMeetingLocation(in.getMeetingLocation());
        this.meetingTimesService.updateMeetingTimes(in.getMeetingTimes());
        editingClass.get().setInstructor(in.getInstructor());
        editingClass.get().setDescription(in.getDescription());
        editingClass.get().setOfficeLocation(in.getOfficeLocation());
        this.meetingTimesService.updateMeetingTimes(in.getOfficeHours());
        editingClass.get().setInstructorPhone(in.getInstructorPhone());
        editingClass.get().setInstructorEmail(in.getInstructorEmail());
        editingClass.get().setTextbook(in.getTextbook());
        editingClass.get().setStartDate(in.getStartDate());
        editingClass.get().setEndDate(in.getEndDate());
        editingClass.get().setSyllabus(in.getSyllabus());
    }
}
