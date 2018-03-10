package pt.isel.daw.examples;

public class Settings {

    private final String connString;

    public Settings(String connString) {

        this.connString = connString;
    }

    public String getConnString() {
        return connString;
    }

    public static Settings fromEnvironment() {
        return new Settings(System.getenv("CONN_STRING"));
    }
}
