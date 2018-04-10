package pt.isel.daw.samplespringboot0;

import org.springframework.stereotype.Indexed;

import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RequiresAuthentication {

    String value() default "";

}
