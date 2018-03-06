package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Component
public class Router {

    private static final Logger log = LoggerFactory.getLogger(Router.class);

    private final Map<String, Command> map = new HashMap<>();

    public Router(List<Command> cmds) {
        for(Command cmd : cmds) {
            log.info("registering {} on path template {}", cmd.getClass().getSimpleName(), cmd.getPathTemplate());
            map.put(cmd.getMethod() + " " + cmd.getPathTemplate(), cmd);
        }
    }

    public void run(String s) {
        Optional.ofNullable(map.get(s)).ifPresent(cmd -> cmd.execute(null));
    }
}
