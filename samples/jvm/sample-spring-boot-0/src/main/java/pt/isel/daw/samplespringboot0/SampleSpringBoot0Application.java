package pt.isel.daw.samplespringboot0;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.method.support.InvocableHandlerMethod;
import org.springframework.web.servlet.HandlerAdapter;
import org.springframework.web.servlet.HandlerExecutionChain;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.mvc.method.annotation.*;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Method;
import java.util.Collections;

@SpringBootApplication
@EnableSwagger2
public class SampleSpringBoot0Application {

	public static void main(String[] args) {
		SpringApplication.run(SampleSpringBoot0Application.class, args);
	}

	@Bean
    public ICalMessageConverter iCalConverter() {
	    return new ICalMessageConverter();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

}
