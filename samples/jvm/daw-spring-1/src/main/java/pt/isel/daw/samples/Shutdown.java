package pt.isel.daw.samples;

import org.springframework.stereotype.Component;

import java.util.concurrent.Semaphore;

@Component
public class Shutdown {

    private final Semaphore sem;

    public Shutdown() {
        this.sem = new Semaphore(0);
    }

    public void start() {
        sem.release();
    }

    public void await() throws InterruptedException {
        sem.acquire();
    }

}
