package com.senior_project.senior_project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "UserID", nullable = false)
    private int userID;

    @Column(name = "Username", nullable = false)
    private String userName;

    @Column(name = "Password", nullable = false)
    private String password;

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        if(password.length() < 6) {
            throw new IllegalArgumentException("Password must be at least 8 characters");
        }
        this.password = password;
    }
}
