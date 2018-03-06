package pt.isel.daw.samplespringbootpl0;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {

    private final Service1 svc;

    public ExampleController(Service1 svc) {

        this.svc = svc;
    }

    @GetMapping("/greetings/{id}")
    public String get(
            @PathVariable("id") int id
    ){
        return "hello world with id=" +  id;
    }

}
