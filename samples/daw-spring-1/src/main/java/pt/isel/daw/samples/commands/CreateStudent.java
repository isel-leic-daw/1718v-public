package pt.isel.daw.samples.commands;

import org.springframework.stereotype.Component;
import pt.isel.daw.samples.Command;
import pt.isel.daw.samples.CommandRequest;
import pt.isel.daw.samples.CommandResult;
import pt.isel.daw.samples.EmailSender;

@Component
public class CreateStudent implements Command {

    private final EmailSender emailSender;

    public CreateStudent(EmailSender emailSender) {
        this.emailSender = emailSender;
    }
    
    @Override
    public CommandResult execute(CommandRequest req) {
        return null;
    }

    @Override
    public String getPathTemplate() {
        return "/students";
    }

    @Override
    public String getMethod() {
        return "POST";
    }
}
