package pt.isel.daw.samplespringboot0;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod;

import java.util.List;

//@Configuration
public class MvcConfig extends WebMvcConfigurationSupport  {

    private final ExampleInterceptor interceptor;
    private final ICalMessageConverter icalMessageConverter;

    // do not forget to explain this ctor
    public MvcConfig(
            ExampleInterceptor interceptor,
            ICalMessageConverter icalMessageConverter) {

        this.interceptor = interceptor;
        this.icalMessageConverter = icalMessageConverter;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(interceptor);
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        //resolvers.add(new QueryStringArgumentResolver());
        resolvers.add(new ClientIpArgumentResolver());
    }

    @Override
    public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(icalMessageConverter);
    }

    @Override
    protected RequestMappingHandlerAdapter createRequestMappingHandlerAdapter() {
        return new MyRequestMappingHandlerAdapter();
    }

    private static class MyRequestMappingHandlerAdapter extends RequestMappingHandlerAdapter {

        @Override
        protected ServletInvocableHandlerMethod createInvocableHandlerMethod(HandlerMethod handlerMethod) {
            return new MyServletInvocableHandlerMethod(handlerMethod);
        }
    }

    private static class MyServletInvocableHandlerMethod extends ServletInvocableHandlerMethod {

        private static final Logger log = LoggerFactory.getLogger(MyServletInvocableHandlerMethod.class);

        public MyServletInvocableHandlerMethod(HandlerMethod handlerMethod) {
            super(handlerMethod);
        }

        @Override
        protected Object doInvoke(Object... args) throws Exception {
            for(Object arg : args) {
                if(arg == null) continue;
                log.info("parameter: {} -> {}", arg.getClass().getSimpleName(), arg);
            }
            return super.doInvoke(args);
        }
    }


}
