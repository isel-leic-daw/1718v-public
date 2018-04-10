package pt.isel.daw.samplespringboot0;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class MyExceptionHandlerAdvice {

    public static class ErrorModel {
        public String type;
        public int status = 400;
        public String message;
    }

    @ExceptionHandler(Throwable.class)
    public final ResponseEntity<ErrorModel> handle(
            Throwable ex,
            WebRequest request) {
        ex.printStackTrace();
        ErrorModel error = new ErrorModel();
        error.message = ex.getMessage();
        error.type = "http://example.com/error/types/rels/some-type";

        return new ResponseEntity<ErrorModel>(error, HttpStatus.BAD_REQUEST);
    }

}
