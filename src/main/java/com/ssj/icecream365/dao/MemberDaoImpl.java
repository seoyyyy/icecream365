package com.ssj.icecream365.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssj.icecream365.domain.Member;
import com.ssj.icecream365.domain.SignUp;

@Repository("memberDao")
public class MemberDaoImpl implements MemberDao {
	
	@Autowired
	private SqlSession sqlSession;
	
	private static String namespace = "mapper.memberMapper";
	
	@Override
	public void register(SignUp vo) throws Exception {
		
		sqlSession.insert(namespace + ".register", vo); 
	}

	@Override
	public String chkDup(Map<String, String> paramMap) throws Exception {

		return sqlSession.selectOne(namespace + ".chkDup", paramMap) ;
	}

	@Override
	public Member login(Member vo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
