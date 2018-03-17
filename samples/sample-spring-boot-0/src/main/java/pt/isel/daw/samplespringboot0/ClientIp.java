package pt.isel.daw.samplespringboot0;

public class ClientIp {

    private final String ip;

    public ClientIp(String ip) {

        this.ip = ip;
    }

    @Override
    public String toString() {
        return ip;
    }
}
