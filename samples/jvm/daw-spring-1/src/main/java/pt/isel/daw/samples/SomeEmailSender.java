package pt.isel.daw.samples;

import org.springframework.stereotype.Component;

@Component
public class SomeEmailSender implements EmailSender {

    @Override
    public void send(String recipient, String subject, String body) {
        // pretend that we sending something
    }
}
