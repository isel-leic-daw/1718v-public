package pt.isel.daw.samplespringboot0;

public class QueryString {

    private final String qs;

    public QueryString(String qs) {

        this.qs = qs;
    }

    @Override
    public String toString() {
        return qs;
    }
}
