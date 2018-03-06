package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainClass {

    private static final Logger log = LoggerFactory.getLogger(MainClass.class);

    public static void main(String[] args) {

        ApplicationContext ctx = new AnnotationConfigApplicationContext(MyConfig.class);

        log.info("before getBean");
        App app = ctx.getBean(App.class);
        log.info("recipe count = {}", ctx.getBeanDefinitionCount());

        app = ctx.getBean(App.class);
        app = ctx.getBean(App.class);
        app = ctx.getBean(App.class);
        log.info("app instance is {}", app);
        app.run();

    }

}
