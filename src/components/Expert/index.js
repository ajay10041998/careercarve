import React, { Component } from 'react';
import './index.css'; // Make sure to create and link this CSS file

class Expert extends Component {
    state = {
        mentors: [],
        isLoading: true,
        error: null
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

    render() {
        const { mentors, isLoading, error } = this.state;

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
                                <div className="mentor-name">{mentor.mentor_Name}</div>
                                <div className="mentor-area">{mentor.area_of_expert}</div>
                                <div className="mentor-availability">{mentor.availability}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Expert;
