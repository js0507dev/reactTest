package com.ls.lsblogsjs.backend.service;

import com.ls.lsblogsjs.backend.exception.UserNotFoundException;
import com.ls.lsblogsjs.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailsService implements UserDetailsService {
  private final UserRepository userRepository;
  public UserDetails loadUserByUsername(String userPk) {
    return userRepository.findById(Long.valueOf(userPk)).orElseThrow(UserNotFoundException::new);
  }
}
