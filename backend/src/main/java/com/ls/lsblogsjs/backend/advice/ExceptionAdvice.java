package com.ls.lsblogsjs.backend.advice;

import com.ls.lsblogsjs.backend.dto.CommonResult;
import com.ls.lsblogsjs.backend.exception.AuthenticationEntryPointException;
import com.ls.lsblogsjs.backend.exception.UserNotFoundException;
import com.ls.lsblogsjs.backend.exception.UserSignFailedException;
import com.ls.lsblogsjs.backend.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestControllerAdvice
public class ExceptionAdvice {
  private final ResponseService responseService;
  private final MessageSource messageSource;

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  protected CommonResult defaultException(HttpServletRequest request, Exception e) {
    return responseService.getFailResult(Integer.valueOf(getMessage("unKnown.code")),getMessage("unKnown.msg"));
  }

  @ExceptionHandler(UserNotFoundException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  protected CommonResult userNotFoundException(HttpServletRequest request, UserNotFoundException e) {
    return responseService.getFailResult(Integer.valueOf(getMessage("userNotFound.code")),getMessage("userNotFound.msg"));
  }

  @ExceptionHandler(UserSignFailedException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  protected CommonResult userSignFailedException(HttpServletRequest request, UserSignFailedException e) {
    return responseService.getFailResult(Integer.valueOf(getMessage("userSignFailed.code")),getMessage("userSignFailed.msg"));
  }

  @ExceptionHandler(AuthenticationEntryPointException.class)
  public CommonResult authenticationEntryPointException(HttpServletRequest request, AuthenticationEntryPointException e) {
    return responseService.getFailResult(Integer.valueOf(getMessage("entryPointException.code")),getMessage("entryPointException.msg"));
  }

  @ExceptionHandler(AccessDeniedException.class)
  public CommonResult accessDeniedException(HttpServletRequest request, AuthenticationEntryPointException e) {
    return responseService.getFailResult(Integer.valueOf(getMessage("accessDenied.code")),getMessage("accessDenied.msg"));
  }

  private String getMessage(String code) {
    return getMessage(code, null);
  }
  private String getMessage(String code, Object[] args) {
    return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
  }
}
