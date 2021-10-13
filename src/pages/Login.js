import React from 'react';
import LoginForm from '../components/Authentication/LoginForm';

const Login = () => {
    return (
        <div>
            <p className="text-xl text-center border-b-1 border-green-400">Login</p>
            <LoginForm></LoginForm>
        </div>
    );
};

export default Login;