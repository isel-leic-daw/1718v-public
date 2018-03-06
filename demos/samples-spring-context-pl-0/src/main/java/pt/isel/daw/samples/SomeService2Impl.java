package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class SomeService2Impl implements Service2 {

    private static final Logger log = LoggerFactory.getLogger(SomeService2Impl.class);

    private final Service1 svc1;

    public SomeService2Impl(Service1 svc1) {
        this.svc1 = svc1;
        log.info("ctor");
    }

    @Override
    public void doAnotherThing() {

    }
}
