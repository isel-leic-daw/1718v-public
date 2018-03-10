package pt.isel.daw.samplespringboot0;

import biweekly.Biweekly;
import biweekly.ICalendar;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractGenericHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;

import java.io.IOException;
import java.lang.reflect.Type;

public class ICalMessageConverter extends AbstractGenericHttpMessageConverter<ICalendar> {

    public ICalMessageConverter() {
        super(new MediaType("text","calendar"));
    }

    @Override
    public boolean supports(Class<?> type) {
        return ICalendar.class.isAssignableFrom(type);
    }

    @Override
    protected void writeInternal(ICalendar iCalendar, Type type, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        Biweekly.write(iCalendar).go(outputMessage.getBody());
    }

    @Override
    protected ICalendar readInternal(Class<? extends ICalendar> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        return null;
    }

    @Override
    public ICalendar read(Type type, Class<?> contextClass, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        return null;
    }
}
