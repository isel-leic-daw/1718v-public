package pt.isel.daw.samples;

import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
public class Server {

    private final Router router;
    private final DataSource dataSource;
    private final Shutdown shutdown;
    private final RequestScope requestScope;

    public Server(Router router, DataSource dataSource, Shutdown shutdown, RequestScope requestScope) {

        this.router = router;
        this.dataSource = dataSource;
        this.shutdown = shutdown;
        this.requestScope = requestScope;
    }

    public void start() throws InterruptedException {
        // Lets pretend we startup a server and then a couple of requests come in
        // on different threads...
        for(int i = 0 ; i<2 ; ++i) {
            new Thread(()-> {
                router.run("GET /students");
                requestScope.destroyRequestScopedBeans();

            }).start();
        }


        shutdown.await();
    }
}
