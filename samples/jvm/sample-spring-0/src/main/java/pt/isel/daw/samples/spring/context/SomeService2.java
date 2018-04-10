package pt.isel.daw.samples.spring.context;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SomeService2 implements Service2 {

    public static final Logger log = LoggerFactory.getLogger(SomeService2.class);

    public SomeService2(Service1 svc1) {
        log.info("ctor called on {}, with svc1={}", this, svc1);
    }

}
