import { Link } from 'react-router-dom';
import { Component } from 'react';
import './index.css';

class Mentors extends Component {
    render() {
        return (
            <div className="mentors-container">
                <header className="mentors-header">
                    <h1>Welcome to MBA Mentor Assistance</h1>
                    <p>Your one-stop solution for personalized mentorship</p>
                </header>
                <section className="mentors-section about-section">
                    <h2>About Our Service</h2>
                    <p>
                        Our platform connects MBA students with experienced mentors across various domains, 
                        including Human Resources, Marketing, Finance, and Marketing Management. Whether you're 
                        looking to gain insights into a specific field, need guidance on your career path, or 
                        want to enhance your skills, our mentors are here to assist you every step of the way.
                    </p>
                </section>
                <section className="mentors-section how-it-works-section">
                    <h2>How It Works</h2>
                    <ol>
                        <li>Select your area of interest from the available domains.</li>
                        <li>Browse through the list of mentors who specialize in your chosen domain.</li>
                        <li>Schedule a one-on-one session with a mentor of your choice.</li>
                    </ol>
                    <p>
                        Our platform is designed to ensure that you get the most relevant and timely guidance 
                        based on your interests and availability. Whether you're preparing for a job interview, 
                        working on a project, or just seeking advice, our mentors are here to help.
                    </p>
                </section>
                <section className="mentors-section get-started-section">
                    <h2>Get Started</h2>
                    <p>
                        Ready to take your career to the next level? Start by selecting your domain of interest 
                        and connect with a mentor today!
                    </p>
                    <Link to="/domain"> 
                        <button className="mentors-button">
                            Find a Mentor
                        </button>
                    </Link>
                </section>
            </div>
        );
    }
}

export default Mentors;
