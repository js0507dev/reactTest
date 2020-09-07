package com.ls.lsblogsjs.backend.dto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.ls.lsblogsjs.backend.entity.MenuEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MenuDto {
	private Long id;
	private String name;
	private String icon;
	private String url;
	
	private List<MenuDto> childList;
	
	public MenuDto(MenuEntity entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.icon = entity.getIcon();
		this.url = entity.getUrl();
		
		Optional.ofNullable(entity.getChildList()).ifPresent((childs) -> {
			this.childList = childs.stream().map(child -> new MenuDto(child)).collect(Collectors.toList());
		});
	}
}
