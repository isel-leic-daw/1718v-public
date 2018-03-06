package pt.isel.daw.examples;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@ComponentScan
public class MyConfig {

    @Bean
    DataSource createDataSource() {
        MyDataSource ds = new MyDataSource();
        ds.configure(System.getenv("SETTING"));
        return ds;
    }

}
