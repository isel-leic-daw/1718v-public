package pt.isel.daw.samples.commands;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import pt.isel.daw.samples.Command;
import pt.isel.daw.samples.CommandRequest;
import pt.isel.daw.samples.CommandResult;
import pt.isel.daw.samples.SomeCloseableThing;

import javax.inject.Provider;
import java.sql.Connection;

@Component
public class GetStudents implements Command {

    private static final Logger log = LoggerFactory.getLogger(GetStudents.class);

    private final Provider<Connection> connectionProvider;
    private final Provider<SomeCloseableThing> anotherProvider;

    public GetStudents(Provider<Connection> connectionProvider, Provider<SomeCloseableThing> anotherProvider) {

        this.connectionProvider = connectionProvider;
        this.anotherProvider = anotherProvider;
    }

    @Override
    public CommandResult execute(CommandRequest req) {
        Connection c1 = connectionProvider.get();
        Connection c2 = connectionProvider.get();

        anotherProvider.get();
        anotherProvider.get();

        log.info("c1 = {}, c2 = {}", c1.hashCode(), c2.hashCode());
        return null;
    }

    @Override
    public String getPathTemplate() {
        return "/students";
    }

    @Override
    public String getMethod() {
        return "GET";
    }
}
