import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../commponent/auth/AuthForm';
import { check } from '../../modules/user';


const RegisterForm = ({history}) => {

    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    // input 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;

        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    // form 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(register({ username, password }));
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(()=> {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if(authError) {
            console.log('오류발생');
            console.log(authError);
            return;
        }
        if(auth){
            console.log('회원가입성공');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    //user 값이 잘 설정되었는지 확인
    useEffect(() => {
        if(user) {
            console.log('check API 성공');
            console.log(user);
            history.push('/'); // 홈화면으로 이동
        }
    }, [history, user]);
    
    return (
        <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    );
};

export default withRouter(RegisterForm);