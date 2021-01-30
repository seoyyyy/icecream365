import React, {useState, useEffect} from 'react';
import icecreamApi from '../utils/icecream-api';

function Main (){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
    icecreamApi.getUserInfo().then((res)=>{
    setUserName(res.data.username);
    setPassword(res.data.password);
    }).catch((error)=>{
        console.log(error);
    })
    },[])
    return (
        <div>
            <div>메인페이지</div>
            <h1 className="App-title">스프링에서 가져온 아이디는 {username} 이고 비밀번호는 {password} 입니다.</h1>
        </div>
    )
}

export default Main;