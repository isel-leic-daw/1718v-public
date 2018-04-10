package pt.isel.daw.samples;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {

    public static void main(String[] args) throws InterruptedException {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(Config.class);
        Server server = ctx.getBean(Server.class);
        server.start();
    }
}
