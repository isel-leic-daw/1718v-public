package pt.isel.daw.samples.commands;

import org.springframework.stereotype.Component;
import pt.isel.daw.samples.Command;
import pt.isel.daw.samples.CommandRequest;
import pt.isel.daw.samples.CommandResult;

@Component
public class SomeCommand implements Command {
    @Override
    public CommandResult execute(CommandRequest req) {
        return null;
    }

    @Override
    public String getPathTemplate() {
        return "/some/path";
    }

    @Override
    public String getMethod() {
        return "PUT";
    }
}
