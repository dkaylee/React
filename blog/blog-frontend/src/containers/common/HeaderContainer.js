import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../commponent/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    console.log('logout 성공');
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
