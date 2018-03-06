package pt.isel.daw.examples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainClass {

    private static Logger log = LoggerFactory.getLogger(MainClass.class);

    public static void main(String[] args) {

        ApplicationContext ctx = new AnnotationConfigApplicationContext(MyConfig.class);
        Service2 svc2 = ctx.getBean(Service2.class);
        log.info("The service2 is {}", svc2);


    }

}
