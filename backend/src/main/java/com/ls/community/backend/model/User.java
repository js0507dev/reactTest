package com.ls.community.backend.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
public class User implements Serializable {
  @Id
  @GeneratedValue
  Long id;
  String name;
  String password;
  String nickname;
  String authType;
  String accessToken;
  String profileImagePath;
  String profileImageName;
  String isAdmin;
  LocalDate registDate;

  public User() {}
  public User(String name, String password, String nickname) {
    this.name = name;
    this.password = password;
    this.nickname = nickname;
  }
}
