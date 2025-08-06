// client/src/components/Header.js

import React from 'react';

const Header = ({ onNavigate }) => {
    return (
        <header className="bg-white rounded-lg shadow-md p-6 mb-8">
            <nav className="flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">Dev Opportunities</h1>
                <div className="flex gap-2">
                    <button onClick={() => onNavigate('home')} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition">Home</button>
                    <button onClick={() => onNavigate('register')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">Register</button>
                    <button onClick={() => onNavigate('admin')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">Admin</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
