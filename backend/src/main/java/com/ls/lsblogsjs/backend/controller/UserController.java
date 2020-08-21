package com.ls.lsblogsjs.backend.controller;

import com.ls.lsblogsjs.backend.config.JwtProvider;
import com.ls.lsblogsjs.backend.dto.CommonResult;
import com.ls.lsblogsjs.backend.dto.SingleResult;
import com.ls.lsblogsjs.backend.dto.UserInfoDto;
import com.ls.lsblogsjs.backend.entity.UserEntity;
import com.ls.lsblogsjs.backend.exception.UserNotFoundException;
import com.ls.lsblogsjs.backend.exception.UserSignFailedException;
import com.ls.lsblogsjs.backend.repository.UserRepository;
import com.ls.lsblogsjs.backend.service.ResponseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

import javax.servlet.http.HttpServletRequest;

@Api(tags = {"1. User"})
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.OPTIONS})
public class UserController {
  private final UserRepository userRepository;
  private final ResponseService responseService;
  private final PasswordEncoder passwordEncoder;
  private final JwtProvider jwtProvider;

  @SuppressWarnings("rawtypes")
  @ApiOperation(value = "로그인", notes = "회원 로그인한다.")
  @PostMapping("/signin")
  public SingleResult signin(@ApiParam(value = "회원 아이디 : email", required = true) @RequestParam String uid,
                             @ApiParam(value = "패스워드", required = true) @RequestParam String password) {
    UserEntity user = userRepository.findByUid(uid).orElseThrow(UserNotFoundException::new);
    if(!passwordEncoder.matches(password, user.getPassword())) {
      throw new UserSignFailedException();
    }

    return responseService.getSingleResult(jwtProvider.createToken(String.valueOf(user.getId()), user.getRoles()));
  }

  @ApiOperation(value = "회원 가입", notes = "신규 회원을 등록한다.")
  @PostMapping("/signup")
  public CommonResult save(
          @ApiParam(value = "아이디", required = true) @RequestParam String uid,
          @ApiParam(value = "닉네임", required = true) @RequestParam String nickname,
          @ApiParam(value = "비밀번호", required = true) @RequestParam String password) {
    UserEntity userEntity = UserEntity.builder()
            .uid(uid)
            .nickname(nickname)
            .password(passwordEncoder.encode(password))
            .roles(Collections.singletonList("ROLE_USER"))
            .build();
    userRepository.save(userEntity);
    return responseService.getSuccessResult();
  }

  @ApiOperation(value = "회원정보조회", notes = "로그인한 사용자의 정보를 조회한다.")
  @ApiImplicitParams({
      @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후, access_token", required = true, dataType = "String", paramType = "header"),
      @ApiImplicitParam(name = "id", value = "사용자 아이디", required = true, dataType = "Long", paramType = "path")
  })
  @GetMapping("/{id}")
  public SingleResult<UserInfoDto> getUserInfo(
		  @PathVariable("id") Long id,
		  HttpServletRequest req) {
	  String tokenId = jwtProvider.getUserPk(jwtProvider.resolveToken(req));
	  if(!String.valueOf(id).equals(tokenId)) {
		  throw new AccessDeniedException("");
	  }
	  log.info("test111");
	  UserEntity userEntity = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
	  return responseService.getSingleResult(new UserInfoDto(userEntity));
  }
}
