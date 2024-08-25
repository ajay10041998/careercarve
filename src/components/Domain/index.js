import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Domains = () => {
    return (
        <div className="domains-container">
            <header className="domains-header">
                <h1>Select Your Domain</h1>
            </header>
            <section className="domains-list">
                <div className="domain-card">
                    <h2>Human Resources</h2>
                    <p>Get expert advice in HR management and strategies.</p>
                    <Link to="/mentors/Human Resources">
                        <button className="domain-button">Explore HR Mentors</button>
                    </Link>
                </div>
                <div className="domain-card">
                    <h2>Marketing</h2>
                    <p>Learn from experienced marketers to enhance your skills.</p>
                    <Link to="/mentors/Marketing">
                        <button className="domain-button">Explore Marketing Mentors</button>
                    </Link>
                </div>
                <div className="domain-card">
                    <h2>Finance</h2>
                    <p>Receive guidance on financial planning and analysis.</p>
                    <Link to="/mentors/Finance">
                        <button className="domain-button">Explore Finance Mentors</button>
                    </Link>
                </div>
                <div className="domain-card">
                    <h2>Operations Managment</h2>
                    <p>Develop your expertise in Operations Managment strategies.</p>
                    <Link to="/mentors/Operations Managment">
                        <button className="domain-button">Explore Operations Managment</button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Domains;
