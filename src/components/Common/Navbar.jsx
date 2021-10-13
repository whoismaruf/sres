import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Navbar = () => {
    const { user, logout } = useFirebase();
    return (
        <div className="flex justify-center gap-2 font-semibold text-blue-500 bg-gray-200 text-lg py-4 my-6">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            { user?.email && <span> {user.displayName} <button onClick={logout}>Logout</button></span>  }
        </div>
    );
};

export default Navbar;