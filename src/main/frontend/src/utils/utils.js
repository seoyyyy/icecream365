export const Utils = {
    keyCodes: {
        esc: 27,
        space: 32,
        tab: 9,
        up: 38,
        down: 40,
    },
    pwCheck(password){
        // 숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식
        // const passRule = /^[A-Za-z0-9]{6,12}$/;
       //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
        const passRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        console.log(passRule.test(password));
        return passRule.test(password);
    },
    emailCheck(email){
        const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return emailRule.test(email);
    },
    phoneCheck(phone){
        const phoneRule = /^\d{3}-\d{3,4}-\d{4}$/;
        return phoneRule.test(phone);
    }  

}