package pt.isel.daw.examples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import javax.sql.DataSource;

@Configuration
@ComponentScan
public class MyConfig {

    private static final Logger log = LoggerFactory.getLogger(MyConfig.class);

    @Bean
    @Scope("prototype")
    DataSource createDataSource(Settings settings) {
        MyDataSource ds = new MyDataSource();
        ds.configure(settings.getConnString());
        log.info("ctor MyDataSource");
        return ds;
    }

    @Bean
    Settings getSettings() {
        log.info("creating settings from environment");
        return Settings.fromEnvironment();
    }

}
