package com.example.cors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;
import java.util.Collections;
import java.util.function.Function;

@Component
public class DebugFilter implements Filter {

    private static final Logger log = LoggerFactory.getLogger(DebugFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest hreq = (HttpServletRequest) request;
        HttpServletResponse hres = (HttpServletResponse) response;
        log.info("\nrequest {} on {} with headers \n{} ", hreq.getMethod(), hreq.getRequestURI(),
                headers(Collections.list(hreq.getHeaderNames()), hreq::getHeader));

        chain.doFilter(request, response);

        log.info("\nresponse {} with headers \n{}", hres.getStatus(), headers(hres.getHeaderNames(), hres::getHeader));
    }

    private String headers(Collection<String> headerNames, Function<String, String> getHeader) {
        StringBuffer buf = new StringBuffer();
        for(String name : headerNames) {
            buf.append(name).append(":").append(getHeader.apply(name)).append("\n");
        }
        return buf.toString();
    }

    @Override
    public void destroy() {

    }
}
