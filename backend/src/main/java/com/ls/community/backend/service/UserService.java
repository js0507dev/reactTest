package com.ls.community.backend.service;

import com.ls.community.backend.model.User;
import com.ls.community.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public User findByName(String name) {
    return userRepository.findByName(name);
  }
}
