package pt.isel.daw.samples.spring.context;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class JavaBasedConfigurationExample {

    public static final Logger log = LoggerFactory.getLogger(JavaBasedConfigurationExample.class);

    public static void main(String[] args) {

        log.info("before creating context");
        ApplicationContext ctx = new AnnotationConfigApplicationContext(MyConfig.class);

        log.info("before getBean");
        Service3 bean = ctx.getBean(Service3.class);
    }
    
}
