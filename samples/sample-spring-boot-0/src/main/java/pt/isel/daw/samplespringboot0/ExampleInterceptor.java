package pt.isel.daw.samplespringboot0;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@Component
public class ExampleInterceptor implements HandlerInterceptor{

    private static final Logger log = LoggerFactory.getLogger(ExampleInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String pattern = (String) Optional.ofNullable(request.getAttribute(HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE))
                .orElse("[unknown]");
        log.info("on preHandle for {}", pattern);
        HandlerMethod hm = (HandlerMethod) handler;
        RequiresAuthentication methodAnnotation = hm.getMethodAnnotation(RequiresAuthentication.class);
        if(methodAnnotation != null) {
            log.info("!!! Requires authentication !!!");
        }
        return true;
    }

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                            @Nullable ModelAndView modelAndView) throws Exception {
        log.info("on postHandle");

    }

}
