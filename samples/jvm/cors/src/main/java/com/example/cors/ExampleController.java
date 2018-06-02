package com.example.cors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/example")
public class ExampleController {

    private static final Logger log = LoggerFactory.getLogger(ExampleController.class);

    @GetMapping
    public String get(HttpServletResponse res) {
        log.info("get");
        // res.addHeader("Access-Control-Allow-Origin", "https://www.isel.pt");
        // res.addCookie(new Cookie("cookie-name", "cookie-value"));
        return "OK";
    }

    @PostMapping
    public String post() {
        return "Ok";
    }
}
