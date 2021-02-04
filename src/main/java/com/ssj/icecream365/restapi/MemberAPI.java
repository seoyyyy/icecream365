package com.ssj.icecream365.restapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssj.icecream365.domain.Member;

@RestController
public class MemberAPI {
	
	@PostMapping("/api/signUp")
	public String signUp() {
		/* 데이터 가공 */
		return "결과값";
	}
	
	@GetMapping(value = "/api/info" , produces = "text/plain; charset=utf-8")
	public String getUserInfo() {
		return "결과";
	}
	
	@GetMapping(value= "/api/userinfo")
	public Member getMemberInfo() {
		Member member = new Member("seoyyyy","1234");
		
		return member;
	}
	
	@PutMapping(value = "/api/putInfo")
	public String putInfo() {
		return "Put Success";
	}
}

	
