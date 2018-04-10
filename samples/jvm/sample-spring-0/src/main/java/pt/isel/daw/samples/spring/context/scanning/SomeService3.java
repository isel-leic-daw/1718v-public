package pt.isel.daw.samples.spring.context.scanning;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import pt.isel.daw.samples.spring.context.Service1;
import pt.isel.daw.samples.spring.context.Service2;
import pt.isel.daw.samples.spring.context.Service3;

@Component
public class SomeService3 implements Service3 {

    public static final Logger log = LoggerFactory.getLogger(SomeService3.class);

    public SomeService3(Service1 svc1, Service2 svc2) {
        log.info("ctor called on {}, with svc1={}, svc2={}", this, svc1, svc2);
    }

}
