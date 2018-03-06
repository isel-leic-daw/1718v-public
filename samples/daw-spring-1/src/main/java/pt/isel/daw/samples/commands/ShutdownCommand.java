package pt.isel.daw.samples.commands;

import pt.isel.daw.samples.Command;
import pt.isel.daw.samples.CommandRequest;
import pt.isel.daw.samples.CommandResult;
import pt.isel.daw.samples.Shutdown;

public class ShutdownCommand implements Command {

    private final Shutdown shutdown;

    public ShutdownCommand(Shutdown shutdown) {

        this.shutdown = shutdown;
    }

    @Override
    public CommandResult execute(CommandRequest req) {
        shutdown.start();
        return null;
    }

    @Override
    public String getPathTemplate() {
        return "/shutdown";
    }

    @Override
    public String getMethod() {
        return "POST";
    }
}
