package pt.isel.daw.samplespringboot0;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @GetMapping("hello")
    public String get() {
        return "hello world";
    }
}
