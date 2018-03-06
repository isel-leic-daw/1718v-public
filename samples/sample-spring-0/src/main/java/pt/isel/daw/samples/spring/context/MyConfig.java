package pt.isel.daw.samples.spring.context;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "pt.isel.daw.samples.spring.context.scanning")
public class MyConfig {

    @Bean
    Service1 service1() {
        return new SomeService1();
    }

    @Bean
    Service2 service2(Service1 svc1) {
        return new SomeService2(svc1);
    }
}
