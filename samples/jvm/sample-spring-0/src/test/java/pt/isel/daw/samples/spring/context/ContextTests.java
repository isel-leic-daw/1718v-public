package pt.isel.daw.samples.spring.context;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes=UsingJavaMethods.Config.class)
public class ContextTests {

    @Autowired
    public ApplicationContext ctx;

    @Test
    public void context_is_correctly_configured() {
        UsingJavaMethods.Service3 svc3 = ctx.getBean(UsingJavaMethods.Service3.class);
        assertNotNull(svc3);
    }
}
