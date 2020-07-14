package com.ls.community.backend.repository;

import com.ls.community.backend.model.User;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepositoryImplementation<User, Long> {
  User findByName(String name);
}
