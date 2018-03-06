package pt.isel.daw.samplespringboot0;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SampleSpringBoot0Application {

	public static void main(String[] args) {
		SpringApplication.run(SampleSpringBoot0Application.class, args);
	}

	@Bean
    public ICalMessageConverter iCalConverter() {
	    return new ICalMessageConverter();
    }

}
