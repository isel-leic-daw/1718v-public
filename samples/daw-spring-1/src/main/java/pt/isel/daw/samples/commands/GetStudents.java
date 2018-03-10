package pt.isel.daw.samples.commands;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import pt.isel.daw.samples.*;

import javax.inject.Provider;
import java.sql.Connection;

@Component
public class GetStudents implements Command {

    private static final Logger log = LoggerFactory.getLogger(GetStudents.class);


    private final StudentsRepo studentsRepo;
    private final CourseRepo courseRepo;
    private final Provider<SomeCloseableThing> anotherProvider;

    public GetStudents(
            StudentsRepo studentsRepo,
            CourseRepo courseRepo,
            Provider<SomeCloseableThing> anotherProvider) {
        this.studentsRepo = studentsRepo;
        this.courseRepo = courseRepo;

        this.anotherProvider = anotherProvider;
    }

    @Override
    public CommandResult execute(CommandRequest req) {

        studentsRepo.doSomething();
        // (...)
        courseRepo.doSomething();


        anotherProvider.get();
        anotherProvider.get();

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
