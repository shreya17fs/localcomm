import React, { useState } from 'react';
import formStyles from './Form.module.css';

const Dashboard = ({ currentUser }) => {
  const [requestForm, setRequestForm] = useState({ description: '', contact: '' });
  const [volunteerForm, setVolunteerForm] = useState({ skills: '', availability: '' });

  const handleRequestChange = (e) => {
    const { name, value } = e.target;
    setRequestForm({ ...requestForm, [name]: value });
  };

  const handleVolunteerChange = (e) => {
    const { name, value } = e.target;
    setVolunteerForm({ ...volunteerForm, [name]: value });
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    // Handle request form submission
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    // Handle volunteer form submission
  };

  return (
    <div>
      <h2>Welcome, {currentUser ? currentUser.username : 'Guest'}!</h2>
      
      <div className={formStyles.formContainer}>
        <h3 className={formStyles.formTitle}>Request Assistance</h3>
        <form onSubmit={handleRequestSubmit} className={formStyles.form}>
          <textarea
            name="description"
            value={requestForm.description}
            onChange={handleRequestChange}
            placeholder="Describe your need"
            className={formStyles.formInput}
          />
          <input
            type="text"
            name="contact"
            value={requestForm.contact}
            onChange={handleRequestChange}
            placeholder="Your contact information"
            className={formStyles.formInput}
          />
          <button type="submit" className={formStyles.formButton}>Submit Request</button>
        </form>
      </div>

      <div className={formStyles.formContainer}>
        <h3 className={formStyles.formTitle}>Volunteer</h3>
        <form onSubmit={handleVolunteerSubmit} className={formStyles.form}>
          <textarea
            name="skills"
            value={volunteerForm.skills}
            onChange={handleVolunteerChange}
            placeholder="Describe your skills"
            className={formStyles.formInput}
          />
          <input
            type="text"
            name="availability"
            value={volunteerForm.availability}
            onChange={handleVolunteerChange}
            placeholder="Your availability"
            className={formStyles.formInput}
          />
          <button type="submit" className={formStyles.formButton}>Submit Volunteer Info</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;

