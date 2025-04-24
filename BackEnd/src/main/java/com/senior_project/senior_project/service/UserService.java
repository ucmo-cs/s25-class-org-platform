package com.senior_project.senior_project.service;

import com.senior_project.senior_project.model.User;
import com.senior_project.senior_project.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUserList() {
        return userRepository.findAll();
    }

    public void addNewUser(User user) {
        if(userRepository.findByUserName(user.getUserName()).isPresent()) {
            throw new IllegalStateException("Username Taken");
        }
        userRepository.save(user);
    }

    public void deleteUser(int userID) {
        if(!userRepository.existsById(userID)) {
            throw new IllegalArgumentException("User does not exist.");
        }
        userRepository.deleteById(userID);
    }

    @Transactional
    public void updateUsername(Integer userId, String newUsername){
        Optional<User> user = userRepository.findById(userId);

        if(user.isEmpty()) {
            throw new IllegalArgumentException("User does not exist.");
        }

        user.get().setUserName(newUsername);
    }
}
