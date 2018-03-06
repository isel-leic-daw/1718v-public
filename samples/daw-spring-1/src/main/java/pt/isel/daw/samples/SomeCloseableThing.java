package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("request")
public class SomeCloseableThing implements AutoCloseable {

    private static final Logger log = LoggerFactory.getLogger(SomeCloseableThing.class);

    public SomeCloseableThing() {
        log.info("ctor {}", this);
    }

    public void close() {
        log.info("close {}", this);
    }
}
