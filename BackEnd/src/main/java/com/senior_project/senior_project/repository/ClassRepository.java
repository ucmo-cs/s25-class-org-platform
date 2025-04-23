package com.senior_project.senior_project.repository;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.model.Semester;
import com.senior_project.senior_project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassRepository extends JpaRepository<Class, Integer> {
    List<Class> findAllByUserAndSemester(User user, Semester semester);
    List<Class> findAllByUser(User user);
}
