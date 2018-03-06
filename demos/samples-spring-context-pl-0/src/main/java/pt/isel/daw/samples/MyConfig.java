package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@ComponentScan
public class MyConfig {

    private static final Logger log = LoggerFactory.getLogger(MyConfig.class);


    @Bean
    DataSource getDataSource() {
        MyDataSource ds = new MyDataSource();
        ds.setConfiguration(System.getenv("CONN_STRING"));

        log.info("MyDataSource ctored and configured");
        return ds;
    }

    //@Bean
    //App getApp(Service2 svc) {
    //    return new App(svc);
    //}

    //@Bean
    //Service1 getService1() {
    //    return new SomeService1Impl();
    //}

    //@Bean
    //Service2 getService2(Service1 svc) {
    //    return new SomeService2Impl(svc);
    //}

}
