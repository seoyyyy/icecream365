package com.ssj.icecream365.dao;

import java.util.Map;

import com.ssj.icecream365.domain.Member;
import com.ssj.icecream365.domain.SignUp;

public interface MemberDao {
	// 회원 가입
	public void register(SignUp vo) throws Exception;
	
	// 중복 확인 
	public String chkDup(Map<String, String> paramMap) throws Exception;
	
	// 로그인
	public Member login(Member vo) throws Exception;

}
