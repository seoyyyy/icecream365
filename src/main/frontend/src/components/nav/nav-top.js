import React,{useState,Fragment} from 'react';
import { Link } from 'react-router-dom';

const NavTop = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const [isManager, setIsManager] = useState(false);
    const setUserAuth = () => {
        setIsLogin(!isLogin);
    }

    const setAdminAuth = () => {
        setIsAdmin(!isAdmin);
    }

    const setManagerAuth = () => {
        setIsManager(!isManager);
    }

    return (
        <Fragment>
            <ul>
                <li className="home">
                    <Link to="/">
                        <span>홈</span>
                    </Link>
                </li>
                <li className="order">
                    <Link to="/order/store">
                        <span>주문하기</span>
                    </Link>
                </li>
                <li className="review">
                    <Link to="/review">
                        <span>후기</span>
                    </Link>
                </li>
                <li className="notice">
                    <Link to="/notice">
                        <span>공지사항</span>
                    </Link>
                </li>
                {/* 점주 일때만 보이는 페이지 */}
                {isManager&&(
                    <li className="manager">
                        <Link to="/store-manager">
                            <span>지점 관리</span>    
                        </Link>
                    </li>
                )}
                {/* 관리자 일때만 보이는 페이지 */}
                {isAdmin&&(
                    <li className="admin">
                        <Link to="/admin">
                            <span>관리자</span>
                        </Link>
                    </li>
                )}
                {!isLogin?(
                    <>
                    {/* 로그인 안했을 때 볼 수 있는 페이지 */}
                        <li className="signup">
                            <Link to="/signup">
                                <span>회원가입</span>    
                            </Link>    
                        </li>
                        <li className="login">
                            <Link to="/login">
                                <span>로그인</span>    
                            </Link>
                        </li>
                    </>
                    ):(
                        <>
                        {/* 로그인 했을 때 볼 수 있는 페이지 */}
                            <li className="userinfo">
                                <Link to="/user-info">
                                    <span>회원 정보</span>    
                                </Link>    
                            </li>
                            
                        </>
                    )
                }
                
                <button className={'tempLoginFix'} onClick={setUserAuth}>임시 {!isLogin?'로그인':'로그아웃'}</button>
                <button className={'tempLoginFix'} onClick={setAdminAuth}>관리자 권한 {!isAdmin?'설정':'해제'}</button> 
                <button className={'tempLoginFix'} onClick={setManagerAuth}>점주 권한 {!isManager?'설정':'해제'}</button> 
            </ul>
        </Fragment>
    )

}

export default NavTop;