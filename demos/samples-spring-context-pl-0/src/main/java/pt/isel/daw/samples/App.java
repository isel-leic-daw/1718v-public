package pt.isel.daw.samples;

//@Bean
//App getApp(Service2 svc) {
//   return new App(svc);
//}

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class App {

    private static final Logger log = LoggerFactory.getLogger(App.class);

    private final Service2 svc2;
    private final Service1 svc1;

    public App(Service1 svc1, Service2 svc2) {
        log.info("ctor");
        this.svc2 = svc2;
        this.svc1 = svc1;
    }

    public void run() {
        // ...
    }

}
