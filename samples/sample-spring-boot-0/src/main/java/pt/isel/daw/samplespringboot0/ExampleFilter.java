package pt.isel.daw.samplespringboot0;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerMapping;

import javax.servlet.*;
import java.io.IOException;
import java.util.Optional;

// It is enough to mark the filter has a Bean for it to be registered
@Component
public class ExampleFilter implements Filter {

    private static final Logger log = LoggerFactory.getLogger(ExampleFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        log.info("before");
        chain.doFilter(request, response);
        String pattern = (String) Optional.ofNullable(request.getAttribute(HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE))
                .orElse("[unknown]");
        log.info("after, pattern = {}", pattern);
    }

    @Override
    public void destroy() {

    }
}
