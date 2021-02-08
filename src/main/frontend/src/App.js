import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
//import nav
import NavFooter from './components/nav/nav-footer';
import NavTop from './components/nav/nav-top';

//import page
import Main from './pages/main';
import ReviewBoard from './pages/review/review-board';
import NoticeBoard from './pages/notice/board';
import SignUp from './pages/user/signup';
import Login from './pages/login';
import ManagerMain from './pages/store-manager/manager-main';
import AdminMain from './pages/admin/admin-main';
import UserSetting from './pages/user/user-setting';
import Order from './pages/order/order';


function App () {
  
  return (
    <Fragment>
      <div className="header">
        <NavTop/>
      </div>
      <div className="main">
        {/* 메인페이지 */}
        <Route path="/" component={Main} exact={true}/> 
        {/* 주문 페이지 */}
        <Route path="/order/store" component={Order}/>
        {/* 후기 작성 페이지 */}
        <Route path="/review" component={ReviewBoard}/>
        {/* 공지사항 페이지 */}
        <Route path="/notice" component={NoticeBoard}/>
        {/* 점주 일때만 보이는 페이지 */}
        <Route path="/store-manager" component={ManagerMain}/>
        {/* 관리자 일때만 보이는 페이지 */}
        <Route path="/admin" component={AdminMain}/>
        {/* 로그인 안했을 때 볼 수 있는 페이지 - 회원가입, 로그인 */}
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/> 
        {/* 로그인 했을 때 볼 수 있는 페이지 - 회원 정보 관리 */}
        <Route path="/user-info" component={UserSetting}/>
      </div>
      <div className="footer">
        <NavFooter/>
      </div>
    </Fragment>
  )
}
export default App;