package pt.isel.daw.samplespringboot0;

import biweekly.Biweekly;
import biweekly.ICalendar;
import biweekly.component.VEvent;
import biweekly.property.Summary;
import biweekly.util.Frequency;
import biweekly.util.Recurrence;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

import biweekly.util.Duration;

@RestController
@RequestMapping("/examples")
public class ExampleController {

    @GetMapping("/1/{id}")
    public String get1(@PathVariable("id") int id) {
        return "The request id was " + id;
    }

    @GetMapping("/2/{id}")
    public String get2(@PathVariable("id") int id, @RequestParam("name") String name) {
        return String.format("The request id was %d and name was %s", id, name);
    }

    @GetMapping("/3/{id}")
    public String get3(@PathVariable("id") int id, @RequestParam("name") Optional<String> name) {
        return String.format("The request id was %d and name was %s", id, name.orElse("absent"));
    }

    @GetMapping("/4")
    public String get4(@RequestParam MultiValueMap<String, String> prms) {
        return prms.entrySet().stream()
                .map(e -> e.getKey() + "->" + e.getValue())
                .collect(Collectors.joining());
    }

    private static class OutputModel5{
        public int i = 42;
        public String s = "hello";
    }

    @GetMapping("/5")
    public OutputModel5 get5() {
        return new OutputModel5();
    }

    private static class OutputModel6{
       public OutputModel5 field1;
       public OutputModel5 field2 = new OutputModel5();
       public OutputModel5[] field3 =  {new OutputModel5()};
    }

    @GetMapping("/6")
    public OutputModel6 get6() {
        return new OutputModel6();
    }

    private static class OutputModel7{
        // JsonIgnore is a Jackson annotation
        @JsonIgnore
        public OutputModel5 field1;
        public OutputModel5 field2 = new OutputModel5();
        public OutputModel5[] field3 =  {new OutputModel5()};
    }

    @GetMapping("/7")
    public OutputModel7 get7() {
        return new OutputModel7();
    }

    @GetMapping(path="/8", produces="application/xml")
    public OutputModel7 get8() {
        return new OutputModel7();
    }

    @GetMapping(path="/9")
    public ICalendar get9() {
        ICalendar ical = new ICalendar();
        VEvent event = new VEvent();
        Summary summary = event.setSummary("Aula de DAW");
        summary.setLanguage("pt-pt");

        Date start = Date.from(Instant.parse("2018-03-06T14:30:00.00Z"));
        event.setDateStart(start);

        Duration duration = new Duration.Builder().minutes(90).build();
        event.setDuration(duration);

        Recurrence recur = new Recurrence.Builder(Frequency.WEEKLY)
                .interval(1)
                .count(13)
                .build();
        event.setRecurrenceRule(recur);
        ical.addEvent(event);

        return ical;
    }

}
