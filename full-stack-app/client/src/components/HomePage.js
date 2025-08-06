// client/src/components/HomePage.js

import React from 'react';

const HomePage = ({ onNavigate }) => {
    return (
        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
            <p className="text-lg text-gray-600 mb-6">
                We're looking for passionate individuals to join our team as interns or volunteers. This is a great opportunity to gain experience and contribute to exciting projects in a MERN stack environment.
            </p>
            <button onClick={() => onNavigate('register')} className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition transform hover:scale-105">
                Apply Now
            </button>
        </section>
    );
};

export default HomePage;
