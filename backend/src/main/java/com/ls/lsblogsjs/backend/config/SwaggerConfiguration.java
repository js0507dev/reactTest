package com.ls.lsblogsjs.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
  @Bean
  public Docket swaggerApi() {
    return new Docket(DocumentationType.SWAGGER_2)
            .apiInfo(swaggerInfo())
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.ls.lsblogsjs.backend.controller"))
            .paths(PathSelectors.any())
            .build()
            .useDefaultResponseMessages(false);
  }

  private ApiInfo swaggerInfo() {
    return new ApiInfoBuilder().title("LS Blog SJS Documentation")
            .description("React 개발시 사용되는 Backend API Reference 문서입니다.")
            .license("js0507dev")
            .licenseUrl("https://github.com/js0507dev")
            .version("1")
            .build();
  }
}
