package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
@Scope("prototype")
public class SomeService1Impl implements Service1 {

    private static final Logger log = LoggerFactory.getLogger(SomeService1Impl.class);

    private final DataSource ds;

    public SomeService1Impl(DataSource ds) {

        this.ds = ds;
        log.info("ctor");
    }

    @Override
    public void doSomething() {

    }
}
