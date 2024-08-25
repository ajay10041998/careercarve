import React, { Component } from 'react';
import './index.css';

class Expert extends Component {
    state = {
        mentors: [],
        isLoading: true,
        error: null,
        showPopup: false,
        selectedMentor: null,
        studentName: '',
        availability: '',
        areaOfInterest: ''
    };

    componentDidMount() {
        this.getMentorsDetails();
    }

    getMentorsDetails = async () => {
        const { match } = this.props;
        const { params } = match;
        const { area_of_expert } = params;

        const apiUrl = `https://studentsmentors-zrvc.onrender.com/mentors/${area_of_expert}`;
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            this.setState({ mentors: data, isLoading: false });
        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    };

    openPopup = (mentor) => {
        this.setState({ showPopup: true, selectedMentor: mentor });
    };

    closePopup = () => {
        this.setState({ showPopup: false, selectedMentor: null });
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted with:', {
            studentName: this.state.studentName,
            availability: this.state.availability,
            areaOfInterest: this.state.areaOfInterest,
            mentor: this.state.selectedMentor
        });
        this.closePopup();
    };

    render() {
        const { mentors, isLoading, error, showPopup, selectedMentor, studentName, availability, areaOfInterest } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className="mentors-container">
                <h1>Mentors in {this.props.match.params.area_of_expert}</h1>
                <div className="mentors-list">
                    {mentors.map((mentor) => (
                        <div key={mentor.mentor_id} className="mentor-card">
                            <div className="mentor-initial">
                                {mentor.mentor_Name.charAt(0)}
                            </div>
                            <div className="mentor-details">
                                <div className="mentor-name">{mentor.mentor_Name || 'Name not available'}</div>
                                <div className="mentor-area">{mentor.area_of_expert || 'Expertise not available'}</div>
                                <div className="mentor-availability">{mentor.availability || 'Availability not available'}</div>
                                <button className="button-primary" onClick={() => this.openPopup(mentor)}>Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h2>Book a Session with {selectedMentor.mentor_name}</h2>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Student Name:
                                    <input
                                        type="text"
                                        name="studentName"
                                        value={studentName}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Availability:
                                    <input
                                        type="text"
                                        name="availability"
                                        value={availability}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Area of Interest:
                                    <input
                                        type="text"
                                        name="areaOfInterest"
                                        value={areaOfInterest}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </label>
                                <button type="submit" className="button-primary">Submit</button>
                                <button type="button" onClick={this.closePopup} className="button-secondary">Cancel</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Expert;
