package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.MeetingTimes;
import com.senior_project.senior_project.service.MeetingTimesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("MeetingTimes")
public class MeetingTimesController {
    final private MeetingTimesService meetingTimesService;

    @Autowired
    public MeetingTimesController(MeetingTimesService meetingTimesService) {
        this.meetingTimesService = meetingTimesService;
    }

    @GetMapping("all/")
    public List<MeetingTimes> getAllMeetingTimes() {
        return meetingTimesService.getAllMeetingTimes();
    }

    @GetMapping("{id}")
    public MeetingTimes getMeetingTimes(@PathVariable("id")int meetingTimesId) {
        return meetingTimesService.getMeetingTimesById(meetingTimesId);
    }

    @PostMapping("/")
    public void addMeetingTimes(@RequestBody MeetingTimes meetingTimes) {
        meetingTimesService.addNewMeetingTimes(meetingTimes);
    }

    @DeleteMapping("{id}")
    public void deleteMettingTimes(@PathVariable("id")int meetingTimesId) {
        meetingTimesService.deleteMeetingTimes(meetingTimesId);
    }

    @PutMapping("/")
    public void updateMeetingTimes(@RequestBody MeetingTimes meetingTimes) {
        meetingTimesService.updateMeetingTimes(meetingTimes);
    }
}
