package pt.isel.daw.samples.spring.context;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SomeService1 implements Service1 {

    public static final Logger log = LoggerFactory.getLogger(SomeService1.class);

    public SomeService1() {
        log.info("ctor called on {}", this);
    }
}
