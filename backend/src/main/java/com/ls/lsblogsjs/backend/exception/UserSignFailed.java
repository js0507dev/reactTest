package com.ls.lsblogsjs.backend.exception;

public class UserSignFailed extends RuntimeException {
  public UserSignFailed(String msg, Throwable t) {
    super(msg, t);
  }

  public UserSignFailed(String msg) {
    super(msg);
  }

  public UserSignFailed() {
    super();
  }
}
