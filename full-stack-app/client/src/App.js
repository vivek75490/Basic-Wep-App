// client/src/App.js

import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import AdminPage from './components/AdminPage';

function App() {
    const [page, setPage] = useState('home');

    const renderPage = () => {
        switch (page) {
            case 'register':
                return <RegisterPage onNavigate={setPage} />;
            case 'admin':
                return <AdminPage />;
            case 'home':
            default:
                return <HomePage onNavigate={setPage} />;
        }
    };

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen font-sans">
            <div className="container mx-auto p-4 md:p-8 max-w-4xl">
                <Header onNavigate={setPage} />
                <main>
                    {renderPage()}
                </main>
            </div>
        </div>
    );
}

export default App;
