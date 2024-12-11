package com.socialbysteph.simmy_backend.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;


    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/users")
    public List<SIMMYUser> getUsers() {
        return authService.getUsers();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/user/{username}")
    public SIMMYUser getUserByUsername(@PathVariable String username) {
        return authService.getUserByUsername(username);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, path = "/register")
    public boolean registerUser(@RequestBody SIMMYUser SIMMYUser) {
        return authService.registerUser(SIMMYUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/emails")
    public List<String> getAllEmails() {
        return authService.getAllEmails();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.POST, path = "/login")
    public SIMMYUser loginUser(@RequestBody SIMMYUser checkSIMMYUser) {
        return authService.loginUser(checkSIMMYUser);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/delete/{username}")
    public boolean removeUser(@PathVariable String username) {
        return authService.removeUser(username);
    }
}