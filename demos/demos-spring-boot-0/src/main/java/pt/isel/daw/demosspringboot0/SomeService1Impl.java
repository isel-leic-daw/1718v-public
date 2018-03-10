package pt.isel.daw.demosspringboot0;

import org.springframework.stereotype.Component;

@Component
public class SomeService1Impl implements Service1{

    @Override
    public int add(int a, int b) {
        return a + b;
    }
}
