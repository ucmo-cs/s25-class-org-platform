package com.senior_project.senior_project.controller;

import com.senior_project.senior_project.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class SeniorProjectController {
    //Used to test that you can connect to the server. Use https://localhost:portNumber(8080 by default)/
    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }
}
