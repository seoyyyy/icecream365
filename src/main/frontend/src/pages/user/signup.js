import React, { useState } from 'react';
import UserInfo from '../../model/user';
import SelectAddrDialog from '../../components/dialog/select-addr-dialog';
import { Utils } from '../../utils/utils';
import icecreamApi from '../../utils/icecream-api';

const SignUp = (props) => {
    const [state, setState] = useState({
        loginId: '',
        loginPw: '',
        loginRePw: '',
        name: '',
        zipcode: '',
        addr1: '',
        addr2: '',
        email1: '',
        email2: '',
        phone1: '010',
        phone2: '',
        phone3: '',
        role: '',
        IsPostOpen: false,
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setState({
            ...state,
            [key]:value
        })
      
    }

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        const changeFlag = value.trim();
            setState({
                ...state,
                email2:changeFlag?value:'',
            })
        }

    const addrToggle = (e) => {
        e.preventDefault();
        setState({...state, IsPostOpen:!state.IsPostOpen});
    }

    const onSubmit = () => {
       const user = new UserInfo(state);
       if(validChk(user)){
            icecreamApi.createUser(user).then(res => {
                console.log(res);
                if(res.data.result==="true"){
                    alert('회원 가입 완료!');
                    props.history.push('/');
                }else if(res.data.result==='false'){
                    let errorMsg = '이미 존재하는 {placeholder} 입니다.';
                    let errType = '아이디';
                     switch (res.data.value) {
                         case 'phone':
                            errType = '연락처';
                             break;
                         case 'email':
                             errType = '이메일';
                             break;
                     }
                     setErrorMsg(errorMsg.replace('{placeholder}',errType));
                }
            }).catch(error => {
                console.log(error);
            })
       }
    }

    // 유효성 검사
    const validChk = (user) => {
        if(!isEmptyValue(user)){ // empty 값 체크
            return false;
        }else if(!regexCheck(user)){
            return false;
        }
        return true;
    }
    //공백 체크
    const isEmptyValue = (user) => {
        if(!user.login_id){
            setErrorMsg('아이디를 입력해주세요.');
            return false;
        }else if(!user.login_pw){
            setErrorMsg('비밀번호를 입력해주세요.');
            return false;
        }else if(!user.login_repw){
            setErrorMsg('비밀번호 확인을 입력해주세요.');
            return false;
        }else if(!user.name){
            setErrorMsg('이름을 입력해주세요.');
            return false;
        }else if(!user.zipcode){
            setErrorMsg('우편번호를 입력해주세요.');
            return false;
        }else if(!user.addr2){
            setErrorMsg('상세 주소를 입력해주세요.');
            return false;
        }else if(!user.email){
            setErrorMsg('이메일 주소를 입력해 주세요.');
            return false;
        }else if(!user.phone){
            setErrorMsg('핸드폰 번호를 입력해주세요.');
            return false;
        }

        return true;
    }

    // 정규식 유효성
    const regexCheck = (user) => {
        console.log('호이')
        if(!Utils.pwCheck(user.login_pw)){
            setErrorMsg('비밀번호는 숫자와 문자, 특수문자를 포함하여 8~15자리 이내의 형태로 입력해주세요.');
            return false;
        }else if(user.login_pw !== user.login_repw){
            setErrorMsg('비밀번호와 비밀번호 확인이 같지 않습니다.');
            return false;
        }else if(!Utils.emailCheck(user.email)){
            setErrorMsg('올바른 형태의 이메일로 입력해주세요.');
            return false;
        }else if(!Utils.phoneCheck(user.phone)){
            setErrorMsg('올바른 형태의 연락처로 입력해주세요.');
            return false;
        }
        return true;
    }

    //우편번호 변경
    const handleChangeAddr = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";
    
        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setState({...state, zipcode:data.zonecode, addr1: fullAddress, IsPostOpen:false});

      };

    return (
        <div className={'container'}>
            <span className='align-center'><h1>회원가입</h1></span>
            <div className={'input-form'}>
                <div className="form-id">
                    <label htmlFor="loginId">아이디</label>
                    <input type="text" id="loginId" value={state.loginId} onChange={handleChange} maxLength={20}/>
                </div>
                <div className="form-pw">
                    <label htmlFor="loginPw">비밀번호</label>
                    <input type="password" id="loginPw" value={state.loginPw} onChange={handleChange} maxLength={100}/>
                </div>
                <div className="form-repw">
                    <label htmlFor="loginRePw">비밀번호 확인</label>
                    <input type="password" id="loginRePw" value={state.loginRePw} onChange={handleChange} maxLength={100}/>
                </div>
                <div className="form-name">
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" value={state.name} onChange={handleChange} maxLength={20}/>
                </div>
                <div className="form-addr">
                     <label htmlFor="zipcode">주소</label>
                     <input id="zipcode" value={state.zipcode} readOnly={true} placeholder="우편번호"/>
                     <button color="primary" onClick={addrToggle}>우편번호 찾기</button>
                     <input id="addr1" value={state.addr1} readOnly={true} placeholder="주소"/>
                     <input id="addr2" value={state.addr2} onChange={handleChange} maxLength={50} placeholder="상세주소"/>
                </div>
                <div className="form-email">
                    <label htmlFor="email">이메일</label>
                    <input id="email1" value={state.email1} onChange={handleChange}/>
                    {' @  '}
                    <input id="email2" value={state.email2} onChange={handleChange}/>
                    <select id="selectEmail" onChange={handleChangeEmail}>
                        <option value="">직접 입력</option>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="nate.com">nate.com</option>
                        
                    </select>
                </div>
                <div className="form-phone">
                    <label htmlFor="phone">연락처</label>
                    <select id="phone1" onChange={handleChange}>
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                    </select>
                    {' - '}
                    <input type="text" id="phone2" onChange={handleChange} value={state.phone2} maxLength={4}/> 
                    {' - '}
                    <input type="text" id="phone3" onChange={handleChange} value={state.phone3} maxLength={4}/>
                </div>
            </div>
            <button onClick={onSubmit}>등록하기</button>
            {state.IsPostOpen&&<SelectAddrDialog
                close={addrToggle}
                handleChangeAddr={handleChangeAddr}
            />}
            <div>{errorMsg}</div>

        </div>
       
    )
}

export default SignUp;