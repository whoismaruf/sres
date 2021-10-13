import React from 'react';

const RegistrationForm = () => {
    return (
        <div className="mt-8">
            <form className="flex flex-col items-center justify-center" method="POST">
                <input type="email" name="Email" className="py-3 px-2 w-1/4 border-b-2 border-gray-700 focus:border-green-400 outline-none" placeholder="Email"></input>
                <input type="password" name="Password" className="py-3 px-2 w-1/4 border-b-2 border-gray-700 focus:border-green-400 outline-none" placeholder="Password"></input>
                <button className="mt-8 py-3 w-1/4 text-white bg-green-500 hover:bg-green-300 text-lg">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;