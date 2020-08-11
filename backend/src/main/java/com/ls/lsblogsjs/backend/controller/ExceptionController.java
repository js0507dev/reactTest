package com.ls.lsblogsjs.backend.controller;

import com.ls.lsblogsjs.backend.dto.CommonResult;
import com.ls.lsblogsjs.backend.exception.AuthenticationEntryPointException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/exception")
@CrossOrigin(origins = "*")
public class ExceptionController {
  @GetMapping(value = "entrypoint")
  public CommonResult entrypointException() {
    throw new AuthenticationEntryPointException();
  }

  @GetMapping(value = "/accessDenied")
  public CommonResult accessDeniedException() {
    throw new AccessDeniedException("");
  }
}
