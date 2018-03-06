package pt.isel.daw.examples;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

//@Bean
//public Service2 service2(Service1 svc1) {
//    return new SomeService2Impl(svc1);
//}

@Component
public class SomeService2Impl implements Service2 {

    private final Service1 svc1;
    private final DataSource ds;

    public SomeService2Impl(Service1 svc1, DataSource ds) {

        this.svc1 = svc1;
        this.ds = ds;
    }

    @Override
    public void doAnotherThing() {

    }
}
