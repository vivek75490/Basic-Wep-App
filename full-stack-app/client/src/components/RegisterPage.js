// client/src/components/RegisterPage.js

import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = ({ onNavigate }) => {
    const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess(false);

        try {
            const response = await axios.post('/api/applicants', formData);
            console.log('Server response:', response.data);
            
            setIsSubmitting(false);
            setSuccess(true);
            setFormData({ name: '', email: '', interest: '' });

            setTimeout(() => {
                setSuccess(false);
                onNavigate('admin');
            }, 2000);

        } catch (err) {
            setIsSubmitting(false);
            const errorMessage = err.response?.data?.message || 'Failed to submit application. The email might already be in use.';
            setError(errorMessage);
            console.error("Error submitting application:", err);
        }
    };

    return (
        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Intern/Volunteer Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address:</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="interest" className="block text-gray-700 text-sm font-bold mb-2">Why are you interested?</label>
                    <textarea id="interest" value={formData.interest} onChange={handleChange} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" disabled={isSubmitting} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition transform hover:scale-105 disabled:bg-indigo-400 disabled:cursor-not-allowed">
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </div>
            </form>
            {success && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Application submitted! Redirecting...
                </div>
            )}
            {error && (
                 <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                </div>
            )}
        </section>
    );
};

export default RegisterPage;
