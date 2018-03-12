package pt.isel.daw.samplespringboot0;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod;

import java.util.List;

@Configuration
public class MvcConfig extends WebMvcConfigurationSupport  {

    private final ExampleInterceptor interceptor;

    // do not forget to explain this ctor
    public MvcConfig(ExampleInterceptor interceptor) {

        this.interceptor = interceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(interceptor);
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        //resolvers.add(new QueryStringArgumentResolver());
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

        public MyServletInvocableHandlerMethod(HandlerMethod handlerMethod) {
            super(handlerMethod);
        }

        @Override
        protected Object doInvoke(Object... args) throws Exception {
            return super.doInvoke(args);
        }
    }


}
