import React from 'react';
import LoginForm from "../../components/login-form/LoginForm";

const Login: React.FC = () => {
    return (
        <div className="w-full h-full gap-5 flex-col flex justify-center items-center min-h-screen coral-diamond">
            <h1 className="font-bold text-cyan-900 text-2xl">Login</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;