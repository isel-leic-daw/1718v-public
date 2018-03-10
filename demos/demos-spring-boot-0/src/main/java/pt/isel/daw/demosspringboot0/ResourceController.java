package pt.isel.daw.demosspringboot0;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class ResourceController {

    private static final Logger log = LoggerFactory.getLogger(ResourceController.class);

    private final Service1 svc1;

    public ResourceController(Service1 svc1) {
        this.svc1 = svc1;
        log.info("ctor");
    }

    @GetMapping("/greetings")
    public String greetings() {
        return "yet another hello world";
    }

    @GetMapping("/resource/{id}")
    public String get1(@PathVariable("id") String id) {
        return "the id is " + id;
    }

    @GetMapping("/add/{a}/{b}")
    public int add(
            @PathVariable("a") int a,
            @PathVariable("b") int b
    ){
        return svc1.add(a,b);
    }

    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class OutputModel {
        public int i = 42;
        public String s = null;
    }

    @GetMapping("/ex1")
    public OutputModel get1(){
        return new OutputModel();
    }

    public static class InputModel {
        public int i;
        public String s;
    }

    @PostMapping("/ex2/{p}")
    public String post2(
            @PathVariable String p,
            @RequestBody InputModel input) {
        return input.s + input.i + p;
    }

}
