package com.ssj.icecream365.domain;

public class SignUp {
	private String login_id, login_pw, name, zipcode, addr1, addr2, email, phone, role;

	public SignUp(String login_id, String login_pw, String name, String zipcode, String addr1,
			String addr2, String email, String phone, String role) {
		super();
		this.login_id = login_id;
		this.login_pw = login_pw;
		this.name = name;
		this.zipcode = zipcode;
		this.addr1 = addr1;
		this.addr2 = addr2;
		this.email = email;
		this.phone = phone;
		this.role = role;
	}

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public String getLogin_pw() {
		return login_pw;
	}

	public void setLogin_pw(String login_pw) {
		this.login_pw = login_pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getAddr1() {
		return addr1;
	}

	public void setAddr1(String addr1) {
		this.addr1 = addr1;
	}

	public String getAddr2() {
		return addr2;
	}

	public void setAddr2(String addr2) {
		this.addr2 = addr2;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "SignUp [login_id=" + login_id + ", login_pw=" + login_pw + ", name="
				+ name + ", zipcode=" + zipcode + ", addr1=" + addr1 + ", addr2=" + addr2 + ", email=" + email
				+ ", phone=" + phone + ", role=" + role + "]";
	}

	
	
	

}
