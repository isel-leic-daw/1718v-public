package pt.isel.daw.samplespringboot0;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

//@ControllerAdvice
public class MyExceptionHandlerAdvice {

    public static class ErrorModel {
        public int status = 400;
    }

    @ExceptionHandler(Throwable.class)
    public final ResponseEntity<ErrorModel> handle(Throwable ex, WebRequest request) {
        return new ResponseEntity<ErrorModel>(new ErrorModel(), HttpStatus.BAD_REQUEST);
    }

}
