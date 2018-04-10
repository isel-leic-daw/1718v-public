package pt.isel.daw.samples;

public interface Command {

    CommandResult execute(CommandRequest req);
    String getPathTemplate();
    String getMethod();
}
