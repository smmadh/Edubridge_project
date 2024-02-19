package com.example.demo.service;


import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.response.Login;

public interface UserService {
	String addUser(UserDTO userDTO);
	public Login loginUser(LoginDTO loginDTO);
	
	
}


