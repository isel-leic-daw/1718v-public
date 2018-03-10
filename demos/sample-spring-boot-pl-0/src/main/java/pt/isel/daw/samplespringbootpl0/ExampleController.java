package pt.isel.daw.samplespringbootpl0;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/examples")
public class ExampleController {

    private final Service1 svc;

    public ExampleController(Service1 svc) {

        this.svc = svc;
    }

    @GetMapping("/ex1/{id}")
    public String get(
            @PathVariable("id") int id,
            @RequestParam("name") Optional<String> name

    ){
        return String.format(
                "hello world with id=%d and name=%s",
                id,
                name.orElse("[absent]"));
    }

    @GetMapping("/ex2")
    public String get2(
            @RequestParam
            MultiValueMap<String,String> qs

    ) {
        return qs.entrySet().stream()
                .map(e -> e.getKey() + "->" + e.getValue())
                .collect(Collectors.joining());
    }



    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class OutputModel {
        public int i = 42;
        public String s = null;
        @JsonProperty("another-field")
        public String anotherField = "another";
    }

    @GetMapping("/ex3")
    public OutputModel get3() {
        return new OutputModel();
    }

    public static class InputModel {
        public int i;
        public String s;
    }

    @PostMapping("/ex4/{path}")
    public String post4(
            @PathVariable("path") String path,
            @RequestBody InputModel im
    ) {
        return im.s + im.i + path;
    }

    @PostMapping("/ex5/{path}")
    public ResponseEntity<OutputModel> post5(
            @PathVariable("path") String path,
            @RequestBody InputModel im
    ) {
        String s = im.s + im.i + path;
        HttpHeaders headers = new HttpHeaders();
        headers.add("My-Header", "My-Value");
        ResponseEntity<OutputModel> res =
                new ResponseEntity<OutputModel>(new OutputModel(), headers, HttpStatus.CREATED);
        return res;
    }

}
