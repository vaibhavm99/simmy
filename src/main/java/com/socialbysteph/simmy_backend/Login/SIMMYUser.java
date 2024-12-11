package com.socialbysteph.simmy_backend.Login;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class SIMMYUser {
    @Id
    private String username;
    private String password;
    private String name;
    private String q1;
    private String q2;
    private String q3;

    public SIMMYUser(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public SIMMYUser(String username) {
        this.username = username;
        this.password = null;
    }

    public SIMMYUser() {
        this.username = "-1";
        this.password = "-1";
    }

    public SIMMYUser(String username, String password, String name, String q1, String q2, String q3) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getQ1() {
        return q1;
    }

    public void setQ1(String q1) {
        this.q1 = q1;
    }

    public String getQ2() {
        return q2;
    }

    public void setQ2(String q2) {
        this.q2 = q2;
    }

    public String getQ3() {
        return q3;
    }

    public void setQ3(String q3) {
        this.q3 = q3;
    }
}
