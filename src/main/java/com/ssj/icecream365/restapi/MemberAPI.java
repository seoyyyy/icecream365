package com.ssj.icecream365.restapi;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;
import com.ssj.icecream365.domain.Member;
import com.ssj.icecream365.domain.SignUp;
import com.ssj.icecream365.service.MemberService;

@RestController
public class MemberAPI {
	
	@Autowired
	MemberService service;
	
	@PostMapping(value = "/member/signup")
	public JsonObject signUp(@RequestBody SignUp user) throws Exception{
		/* 데이터 가공 */
		
		JsonObject resp = new JsonObject();
		
		// 아이디 중복 체크
		if((service.chkDup("login_id", user.getLogin_id())) != null){
			resp.addProperty("result", "false");
			resp.addProperty("value", "login_id");	
			return resp;
		}
		
		// 이메일 중복 체크 
		if(service.chkDup("email", user.getEmail()) != null){
			resp.addProperty("result", "false");
			resp.addProperty("value", "email");
			return resp;
		}
		
		// 연락처 중복 체크
		if(service.chkDup("phone", user.getPhone()) != null){
			resp.addProperty("result", "false");
			resp.addProperty("value", "phone");
			return resp;
		}
		
		service.register(user);
		
		resp.addProperty("result", "true");
	
		return resp;
	}
	
	@GetMapping(value = "/info" , produces = "text/plain; charset=utf-8")
	public String getUserInfo() {
		return "결과";
	}
	
	@GetMapping(value= "/userinfo")
	public Member getMemberInfo() {
		Member member = new Member("seoyyyy","1234");
		
		return member;
	}
	
	@PutMapping(value = "/putInfo")
	public String putInfo() {
		return "Put Success";
	}
}

	
