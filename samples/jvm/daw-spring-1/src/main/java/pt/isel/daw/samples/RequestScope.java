package pt.isel.daw.samples;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.beans.factory.config.Scope;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class RequestScope implements Scope {

    private static Logger log = LoggerFactory.getLogger(RequestScope.class);

    private static final ThreadLocal<Map<String, Object>> beanMap =
         ThreadLocal.withInitial(() -> new HashMap<>());

    private static final ThreadLocal<Map<String, Runnable>> destructionMap =
            ThreadLocal.withInitial(() -> new HashMap<>());

    @Override
    public Object get(String name, ObjectFactory<?> objectFactory) {
        // get the map associated to the current thread
        // no concurrent access exists, since we are using a different map per thread
        Map<String, Object> mapForThisThread  = beanMap.get();

        Object obj = mapForThisThread.get(name);
        if(obj != null) {
            log.info("get {} resolved from scope", name);
            return obj;
        }
        obj = objectFactory.getObject();
        mapForThisThread.put(name, obj);
        log.info("get {} resolved from factory", name);
        return obj;
    }

    @Override
    public Object remove(String name) {
        beanMap.get().remove(name);
        return null;
    }

    @Override
    public void registerDestructionCallback(String name, Runnable callback) {
        log.info("registering destruction callback for {}: {}", name, callback);
        destructionMap.get().put(name, callback);
    }

    @Override
    public Object resolveContextualObject(String key) {
        return null;
    }

    @Override
    public String getConversationId() {
        return null;
    }

    public void destroyRequestScopedBeans() {
        Map<String, Runnable> destructionMapForThisThread = destructionMap.get();
        for(Map.Entry<String, Runnable> e : destructionMapForThisThread.entrySet()) {
            log.info("destroying {}", e.getKey());
            e.getValue().run();
        }
        destructionMapForThisThread.clear();
        beanMap.get().clear();
    }
}
