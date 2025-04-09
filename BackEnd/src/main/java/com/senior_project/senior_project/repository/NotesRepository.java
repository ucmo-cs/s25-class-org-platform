package com.senior_project.senior_project.repository;

import com.senior_project.senior_project.model.Class;
import com.senior_project.senior_project.model.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer> {
    List<Notes> findAllBy_class(Class class_);
}
