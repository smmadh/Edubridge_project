package com.example.demo.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


import com.example.demo.Model.User;

@EnableJpaRepositories
@Repository
public interface UserRepo  extends JpaRepository<User,Integer> {
	Optional<User>findByEmailAndPassword(String email,String password);
	User findByEmail(String email);	
}
