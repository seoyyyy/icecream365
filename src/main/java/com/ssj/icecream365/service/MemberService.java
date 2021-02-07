package com.ssj.icecream365.service;

import java.util.Map;

import com.ssj.icecream365.domain.Member;
import com.ssj.icecream365.domain.SignUp;

public interface MemberService {
	// 회원 가입
	public void register(SignUp vo) throws Exception;
	
	// 아이디 중복 확인
	public String chkDup(String key, String value) throws Exception;
	
	// 로그인
	public Member login(Member vo) throws Exception;
	
	
}
