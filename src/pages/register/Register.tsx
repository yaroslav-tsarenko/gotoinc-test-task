import React from 'react';
import RegistrationForm from "../../components/register-form/RegistrationForm";

const Register: React.FC = () => {
    return (
        <div className="w-full gap-5 flex-col h-full flex justify-center items-center min-h-screen coral-diamond">
            <h1 className="font-bold text-cyan-900 text-2xl">Register</h1>
            <RegistrationForm/>
        </div>
    );
};

export default Register;