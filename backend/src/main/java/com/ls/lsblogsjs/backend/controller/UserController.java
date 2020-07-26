package com.ls.lsblogsjs.backend.controller;

import com.ls.lsblogsjs.backend.entity.UserEntity;
import com.ls.lsblogsjs.backend.repository.UserRepository;
import com.ls.lsblogsjs.backend.service.ResponseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"1. User"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
  private final UserRepository userRepository;
  private final ResponseService responseService;

  @ApiOperation(value = "전체 회원 조회", notes = "모든 회원을 조회한다.")
  @GetMapping("/")
  public List<UserEntity> findAllUsers() {
    return userRepository.findAll();
  }

  @ApiOperation(value = "회원 가입", notes = "신규 회원을 등록한다.")
  @PostMapping("/")
  public UserEntity save(
          @ApiParam(value = "아이디", required = true) @RequestParam String uid,
          @ApiParam(value = "닉네임", required = true) @RequestParam String nickname,
          @ApiParam(value = "비밀번호", required = true) @RequestParam String password) {
    UserEntity userEntity = UserEntity.builder()
            .uid(uid)
            .nickname(nickname)
            .password(password)
           .build();
    return userRepository.save(userEntity);
  }
}
