package pt.isel.daw.samples;

import org.springframework.beans.factory.config.CustomScopeConfigurer;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/*
    Bean used to register the "request" scope
 */
@Component
public class RequestCustomScopeConfigurer extends CustomScopeConfigurer {

    public RequestCustomScopeConfigurer() {
        Map<String, Object> map = new HashMap<>();
        map.put("request", new RequestScope());
        setScopes(map);
    }
}
