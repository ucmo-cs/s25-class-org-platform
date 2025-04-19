package com.senior_project.senior_project.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID", nullable = false)
    private int userID;

    @Column(name = "Username", nullable = false)
    private String userName;

    @Column(name = "Passwordhash")
    private String password;

    public User() {
    }

    public User(int userID, String userName, String password) {
        this.userID = userID;
        this.userName = userName;
        this.password = password;
    }

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        if(userName.isEmpty()) {
            throw new IllegalArgumentException("UserName must not be blank.");
        }
        this.userName = userName;
    }

    public int getUserID() {
        return userID;
    }

    public void setPassword(String password) {
        if(password.length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters");
        }
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", userName='" + userName + '\'' +
                '}';
    }
}
