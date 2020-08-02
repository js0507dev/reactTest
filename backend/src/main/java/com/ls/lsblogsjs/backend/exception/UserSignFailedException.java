package com.ls.lsblogsjs.backend.exception;

public class UserSignFailedException extends RuntimeException {
  public UserSignFailedException(String msg, Throwable t) {
    super(msg, t);
  }

  public UserSignFailedException(String msg) {
    super(msg);
  }

  public UserSignFailedException() {
    super();
  }
}
