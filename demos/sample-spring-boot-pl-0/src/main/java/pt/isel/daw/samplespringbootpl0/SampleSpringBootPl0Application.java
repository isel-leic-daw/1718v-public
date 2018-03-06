package pt.isel.daw.samplespringbootpl0;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SampleSpringBootPl0Application {

	public static void main(String[] args) {

		SpringApplication.run(SampleSpringBootPl0Application.class, args);
	}

	@Bean
	Service1 getService1() {
		return new SomeService1Impl();
	}
}
