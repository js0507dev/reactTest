package com.ls.lsblogsjs.backend.dto;

import com.ls.lsblogsjs.backend.entity.UserEntity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserInfoDto {
	private long id;
	private String uid;
	private String nickname;
	private String avatarUrl;
	
	public UserInfoDto(UserEntity userEntity) {
		this.id = userEntity.getId();
		this.uid = userEntity.getUid();
		this.nickname = userEntity.getNickname();
		this.avatarUrl = userEntity.getAvatarUrl();
	}
}
