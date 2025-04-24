package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.User;
import com.senior_project.senior_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
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
        user.setPassword("Doesn't matter anymore. We're not getting to authentication.");
        System.out.println(user.toString());
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "/{userId}")
    public void deleteUser(@PathVariable("userId") int userId) {
        userService.deleteUser(userId);
    }

    @PutMapping(path = "/update")
    public void updateUsername(@Param("userID") Integer userID, @Param("newName") String newName) {
        System.out.println(userID);
        userService.updateUsername(userID, newName);
    }
}
