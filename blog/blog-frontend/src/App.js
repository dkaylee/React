import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';
import { Helmet } from 'react-helmet-async';
import './App.css';
import UserInfoPage from './pages/UserInfoPage';
import HeaderContainer from './containers/common/HeaderContainer';

function App() {
  return (
    <>
      <Helmet>
        <title>React</title>
      </Helmet>
      <HeaderContainer />
      {/* path에 배열을 넣으면 한 라우트 컴포넌트에 여러 개의 경로를 쉽게 사용할 수 있음 */}
      <Route component={MainPage} path={'/'} exact />
      <Route
        component={PostListPage}
        path={'/postlist'}
        // path={['/@:username', '/postlist']}
        exact
      />
      <Route component={LoginPage} path="/login" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={UserInfoPage} path="/mypage" />
    </>
  );
}

export default App;
