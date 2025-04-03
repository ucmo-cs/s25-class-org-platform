package com.senior_project.senior_project.repository;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.model.Event;
import com.senior_project.senior_project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    List<Event> findAllByClassID(Class classIn);

    List<Event> findAllByUser(User event);
}
