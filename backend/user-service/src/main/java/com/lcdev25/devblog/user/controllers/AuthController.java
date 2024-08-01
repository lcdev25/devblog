package com.lcdev25.devblog.user.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/auth")
public class AuthController {

    @GetMapping("")
    public String test() {
        return "Tested and working, let's see again";
    }

    @GetMapping("/test")
    public String test2() {
        return "Tested and working, let's see again";
    }

    @PostMapping("/redirect")
    public String redirect() {
        return "Invoked the redirect method";
    }

}
