class UserInfo {
    constructor(object){
        this.login_id = object.loginId;
        this.name = object.name;
        this.login_pw = object.loginPw;
        this.login_repw = object.loginRePw;
        this.zipcode = object.zipcode;
        this.addr1 = object.addr1;
        this.addr2 = object.addr2;
        if(object.email1 && object.email2){
            this.email = object.email1.concat('@',object.email2);
        }else{
            this.email = '';
        }
        if(object.phone1 && object.phone2 && object.phone3){
            this.phone = object.phone1.concat('-',object.phone2,'-',object.phone3);
        }else{
            this.phone ='';
        }
        this.role = object.role||0;
    }
}

export default UserInfo;