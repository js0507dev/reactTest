package com.ls.lsblogsjs.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ls.lsblogsjs.backend.dto.MenuDto;
import com.ls.lsblogsjs.backend.entity.MenuEntity;
import com.ls.lsblogsjs.backend.repository.MenuRepository;

@Service
public class MenuService {
	@Autowired
	private MenuRepository menuRepository;
	
	public List<MenuEntity> findAll() {
		List<MenuEntity> menuEntityList = menuRepository.findAll();
		//return menuEntityList.stream().map(entity -> new MenuDto(entity)).collect(Collectors.toList());
		return menuEntityList;
	}
}
