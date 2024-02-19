package com.example.demo.controller;
	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.LoginDTO;

import com.example.demo.response.Login;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")

public class UserController {
	@Autowired
	private UserService userService;
	@PostMapping(path="/register")
	public String addUser(@RequestBody UserDTO userDTO)
	{
		String id=userService.addUser(userDTO);
		return id;
	}
	@PostMapping(path="/login")
	public ResponseEntity<?>loginUser(@RequestBody LoginDTO loginDTO)
	{
		Login login=userService.loginUser(loginDTO);
		return ResponseEntity.ok(login);
	}
	
}