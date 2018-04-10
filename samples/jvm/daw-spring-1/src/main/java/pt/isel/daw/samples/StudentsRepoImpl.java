package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.inject.Provider;
import java.sql.Connection;

@Component
public class StudentsRepoImpl implements StudentsRepo {

    private static final Logger log = LoggerFactory.getLogger(StudentsRepoImpl.class);


    private final Provider<Connection> connProv;

    public StudentsRepoImpl(Provider<Connection> connProv) {

        this.connProv = connProv;
    }

    @Override
    public void doSomething() {

        Connection conn = connProv.get();
        log.info("using connection {}", conn.hashCode());
        // use conn
    }
}
