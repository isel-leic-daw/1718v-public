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

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Method;
import java.util.Collections;

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
