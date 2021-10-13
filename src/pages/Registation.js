import React from 'react';
import RegistrationForm from '../components/Authentication/RegistrationForm';

const Registation = () => {
    return (
        <div>
            <p className="text-xl text-center border-b-1 border-green-400">Register</p>
            <RegistrationForm></RegistrationForm>
        </div>
    );
};

export default Registation;