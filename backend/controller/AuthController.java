package com.example.sociography.controller;

import com.example.sociography.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        String result = authService.authenticate(username, password);
        if ("photographer".equals(result)) {
            return "Photographer login successful";
        } else if ("partner".equals(result)) {
            return "Partner login successful";
        } else {
            return "Login failed: " + result;
        }
    }
}
