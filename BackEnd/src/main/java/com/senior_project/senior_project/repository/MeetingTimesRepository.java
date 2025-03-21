package com.senior_project.senior_project.repository;

import com.senior_project.senior_project.model.MeetingTimes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingTimesRepository extends JpaRepository<MeetingTimes,Integer> {
}
