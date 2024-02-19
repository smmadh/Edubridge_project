
package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.example.demo.Model.User;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UserDTO;

import com.example.demo.repository.UserRepo;
import com.example.demo.response.Login;
@Service
public class CustomerServiceIMPL implements UserService {
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String addUser(UserDTO userDTO) {
		User user=new User(
				userDTO.getId(),
				userDTO.getUsername(),
				userDTO.getEmail(),
				this.passwordEncoder.encode(userDTO.getPassword()));
		userRepo.save(user);
				return user.getUsername();
	}
	
	UserDTO userDTO;
	@Override
	public Login loginUser(LoginDTO loginDTO) {
		User customer1=userRepo.findByEmail(loginDTO.getEmail());
		if(customer1!=null)
		{
			String password=loginDTO.getPassword();
			String encodedPassword=customer1.getPassword();
			Boolean isPwdRight=passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight)
			{
				Optional<User>customer=userRepo.findByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
				if(customer.isPresent())
				{
					return new Login("Login Success",true);
				}
				else
				{
					return new Login("Login Failed",false);
				}
			}
			else
			{
				return new Login("Password not match",false);
			}
		}
		else
		{
			return new Login("Email Not Exist",false);
		}
	}
}