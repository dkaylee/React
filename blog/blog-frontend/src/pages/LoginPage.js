import React from "react";
import AuthForm from "../commponent/auth/AuthForm";
import AuthTemplate from "../commponent/auth/AuthTemplate";

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm/>
        </AuthTemplate>
    );
};

export default LoginPage;