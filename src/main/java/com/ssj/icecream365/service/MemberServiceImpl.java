package com.ssj.icecream365.service;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssj.icecream365.dao.MemberDao;
import com.ssj.icecream365.domain.Member;
import com.ssj.icecream365.domain.SignUp;

@Service("memberService")
public class MemberServiceImpl implements MemberService {
	@Inject
    PasswordEncoder passwordEncoder;
	
	@Autowired
	private MemberDao dao;
	
	@Override
	public void register(SignUp vo) throws Exception {
		String encPassword = passwordEncoder.encode(vo.getLogin_pw());
		vo.setLogin_pw(encPassword);
		dao.register(vo);
	}

	@Override
	public String chkDup(String key, String value) throws Exception {
		Map<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("key", key);
		paramMap.put("value", value);
		return dao.chkDup(paramMap);
	}

	// 비밀번호  비교할때는 passwordEncoder.math(db
	@Override
	public Member login(Member vo) throws Exception {
		
		// TODO Auto-generated method stub
		return null;
	}

}
