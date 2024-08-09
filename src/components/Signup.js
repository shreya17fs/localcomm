import React, { useState } from 'react';
import formStyles from './Form.module.css';

const Signup = ({ setUsers }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({ username: '', password: '' });
  };

  return (
    <div className={formStyles.formContainer}>
      <h2 className={formStyles.formTitle}>Signup</h2>
      <form onSubmit={handleSubmit} className={formStyles.form}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className={formStyles.formInput}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={formStyles.formInput}
        />
        <button type="submit" className={formStyles.formButton}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;


