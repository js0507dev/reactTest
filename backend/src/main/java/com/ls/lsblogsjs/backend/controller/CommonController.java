package com.ls.lsblogsjs.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ls.lsblogsjs.backend.dto.ListResult;
import com.ls.lsblogsjs.backend.dto.MenuDto;
import com.ls.lsblogsjs.backend.entity.MenuEntity;
import com.ls.lsblogsjs.backend.service.MenuService;
import com.ls.lsblogsjs.backend.service.ResponseService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Api(tags = {"2. Common"})
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/common")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.OPTIONS})
public class CommonController {
	private final MenuService menuService;
	private final ResponseService responseService;
	
	@ApiOperation(value = "매뉴목록 조회", notes = "전체 매뉴목록을 조회한다.")
	@GetMapping("/menu/all")
	public ListResult<MenuEntity> menuList() {
		return responseService.getListResult(menuService.findAll());
	}
}
