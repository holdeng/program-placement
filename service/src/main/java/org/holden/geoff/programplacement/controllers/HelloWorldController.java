package org.holden.geoff.programplacement.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "/hello")
public class HelloWorldController {

    @RequestMapping(value = "/world", method = RequestMethod.GET)
    public String helloWorld() {
        return "Hello World";
    }
}
