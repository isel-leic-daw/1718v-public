package pt.isel.daw.samples;

public interface EmailSender {

    void send(String recipient, String subject, String body);
}
