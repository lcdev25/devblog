package com.lcdev25.devblog.user.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @GetMapping("")
    public String test() {
        return "Tested and working, let's see again";
    }

    @GetMapping("/test")
    public String test2() {
        return "Tested and working, let's see again";
    }
}
