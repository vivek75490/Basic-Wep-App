// client/src/components/AdminPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                setLoading(true);
                setError('');
                const response = await axios.get('/api/applicants');
                setApplicants(response.data);
            } catch (err) {
                setError('Could not fetch applicants. Please try again later.');
                console.error("Error fetching applicants:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchApplicants();
    }, []);

    return (
        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Applicant Submissions</h2>
            
            {loading && <div className="text-center text-gray-500">Loading applicants...</div>}
            
            {error && <div className="text-center text-red-500">{error}</div>}

            {!loading && !error && applicants.length === 0 && (
                <div className="text-center text-gray-500">No applicants yet.</div>
            )}

            {!loading && !error && applicants.length > 0 && (
                <div className="space-y-4">
                    {applicants.map(applicant => (
                        <div key={applicant._id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md">
                            <h3 className="text-xl font-semibold text-indigo-700">{applicant.name}</h3>
                            <a href={`mailto:${applicant.email}`} className="text-sm text-indigo-500 hover:underline">{applicant.email}</a>
                            <p className="mt-2 text-gray-700">{applicant.interest}</p>
                            <p className="text-xs text-gray-400 mt-2">
                                Submitted: {new Date(applicant.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default AdminPage;
