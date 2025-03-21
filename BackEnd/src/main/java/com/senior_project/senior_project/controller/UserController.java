package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.User;
import com.senior_project.senior_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getAll")
    public List<User> getUsers() {
        return userService.getUserList();
    }

    @PostMapping("/")
    public void addUser(@RequestBody User user) {
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "/{userId}")
    public void deleteUser(@PathVariable("userId") int userID) {
        userService.deleteUser(userID);
    }

    @PutMapping(path = "/{userId}")
    public void updateUsername(@PathVariable("userId") int userID, @RequestParam(required = false)String newUserName) {
        userService.updateUsername(userID, newUserName);
    }
}
