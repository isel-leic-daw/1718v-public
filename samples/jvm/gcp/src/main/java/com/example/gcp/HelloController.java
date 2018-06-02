package com.example.gcp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/hello")
public class HelloController {

    private static final Logger log = LoggerFactory.getLogger(HelloController.class);

    private int counter = 0;

    @GetMapping
    public String get(HttpServletRequest req){
        return "hello new version from " + req.getLocalAddr();
    }

    @GetMapping("/fault")
    public String getWithFault(HttpServletRequest req) {
        log.info("Handling get from {}", req.getRemoteAddr());
        counter += 1;
        boolean fail = counter % 10 == 0;
        if(fail) throw new RuntimeException("failing");
        return String.format("Hello from %s on iteration %d", req.getLocalAddr(), counter);
    }

    @GetMapping("/delay/{delay}")
    public String getDelay(HttpServletRequest req, @PathVariable("delay") int delay) throws InterruptedException {
        Thread.sleep(delay);
        return String.format("waited (%s)", req.getLocalAddr());
    }
}
