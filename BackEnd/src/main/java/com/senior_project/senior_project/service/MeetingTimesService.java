package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.MeetingTimes;
import com.senior_project.senior_project.repository.MeetingTimesRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class MeetingTimesService {
    final private MeetingTimesRepository meetingTimesRepository;

    @Autowired
    public MeetingTimesService(MeetingTimesRepository meetingTimesRepository) {
        this.meetingTimesRepository = meetingTimesRepository;
    }

    //Used to ensure both times are set together or not set at all. Because if a start time is set, it's corresponding end time should be set
    static public boolean timesAreBothSet(LocalTime start, LocalTime end) {
        if(start == null && end != null) {
            return false;
        } else if(start != null && end == null) {
            return false;
        } else {
            return true;
        }
    }

    static public void validateTimes(MeetingTimes meetingTimes) throws IllegalArgumentException {
        if(!timesAreBothSet(meetingTimes.getMondayStart(), meetingTimes.getMondayEnd())) {
            throw new IllegalArgumentException("Monday Start and End times must both be set.");
        }

        if(!timesAreBothSet(meetingTimes.getTuesdayStart(), meetingTimes.getTuesdayEnd())) {
            throw new IllegalArgumentException("Tuesday Start and End times must both be set.");
        }

        if(!timesAreBothSet(meetingTimes.getWednesdayStart(), meetingTimes.getWednesdayEnd())) {
            throw new IllegalArgumentException("Wednesday Start and End times must both be set.");
        }

        if(!timesAreBothSet(meetingTimes.getThursdayStart(), meetingTimes.getThursdayEnd())) {
            throw new IllegalArgumentException("Thursday Start and End times must both be set.");
        }

        if(!timesAreBothSet(meetingTimes.getFridayStart(), meetingTimes.getFridayEnd())) {
            throw new IllegalArgumentException("Friday Start and End times must both be set.");
        }

        if(!timesAreBothSet(meetingTimes.getSaturdayStart(), meetingTimes.getSaturdayEnd())) {
            throw new IllegalArgumentException("Saturday Start and End times must both be set.");
        }

        if(!timesAreBothSet(meetingTimes.getSundayStart(), meetingTimes.getSundayEnd())) {
            throw new IllegalArgumentException("Sunday Start and End times must both be set.");
        }
    }

    public List<MeetingTimes> getAllMeetingTimes() {
        return meetingTimesRepository.findAll();
    }

    public MeetingTimes getMeetingTimesById(int meetingTimesId) {
        Optional<MeetingTimes> meetingTimes = meetingTimesRepository.findById(meetingTimesId);
        if(meetingTimes.isEmpty()) {
            throw new IllegalArgumentException("MeetingTimes doesn't exist.");
        }
        return meetingTimes.get();
    }

    public void addNewMeetingTimes(MeetingTimes meetingTimes) {
        validateTimes(meetingTimes); //Throws exception if the validation fails, so no if statement needed
        meetingTimesRepository.save(meetingTimes);
    }

    public void deleteMeetingTimes(int meetingTimesId) {
        if(meetingTimesRepository.findById(meetingTimesId).isEmpty()) {
            throw new IllegalArgumentException("MeetingTimes doesn't exist.");
        }
        meetingTimesRepository.deleteById(meetingTimesId);
    }

    @Transactional
    public void updateMeetingTimes(MeetingTimes meetingTimesIn) {
        Optional<MeetingTimes> meetingTimes = meetingTimesRepository.findById(meetingTimesIn.getMeetingTimesId());
        if(meetingTimes.isEmpty()) {
            throw new IllegalArgumentException("Meeting Times doesn't exist.");
        }

        //Validate that the times are set right
        validateTimes(meetingTimesIn);

        //If they are update everything
        meetingTimes.get().setMondayStart(meetingTimesIn.getMondayStart());
        meetingTimes.get().setMondayEnd(meetingTimesIn.getMondayEnd());

        meetingTimes.get().setTuesdayStart(meetingTimesIn.getTuesdayStart());
        meetingTimes.get().setTuesdayEnd(meetingTimesIn.getTuesdayEnd());

        meetingTimes.get().setWednesdayStart(meetingTimesIn.getWednesdayStart());
        meetingTimes.get().setWednesdayEnd(meetingTimesIn.getWednesdayEnd());

        meetingTimes.get().setThursdayStart(meetingTimesIn.getThursdayStart());
        meetingTimes.get().setThursdayEnd(meetingTimesIn.getThursdayEnd());

        meetingTimes.get().setFridayStart(meetingTimesIn.getFridayStart());
        meetingTimes.get().setFridayEnd(meetingTimesIn.getFridayEnd());

        meetingTimes.get().setSaturdayStart(meetingTimesIn.getSaturdayStart());
        meetingTimes.get().setSaturdayEnd(meetingTimesIn.getSaturdayEnd());

        meetingTimes.get().setSundayStart(meetingTimesIn.getSundayStart());
        meetingTimes.get().setSundayEnd(meetingTimesIn.getSundayEnd());
    }
}
