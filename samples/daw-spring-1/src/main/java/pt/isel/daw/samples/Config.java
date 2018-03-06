package pt.isel.daw.samples;

import org.h2.jdbcx.JdbcDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@Configuration
@ComponentScan(basePackages = "pt.isel.daw.samples")
public class Config {

    @Bean
    public DataSource sqlServerDataSource() {
        JdbcDataSource ds = new JdbcDataSource();
        ds.setURL("jdbc:h2:mem:test");
        ds.setUser("sa");
        ds.setPassword("sa");
        return ds;
    }

    @Bean
    @Scope("request")
    public Connection connection(DataSource ds) throws SQLException {
        return ds.getConnection();
    }

}
