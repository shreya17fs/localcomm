import React, { useState } from 'react';
import formStyles from './Form.module.css';

const Login = ({ authenticateUser }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(formData.username, formData.password);
  };

  return (
    <div className={formStyles.formContainer}>
      <h2 className={formStyles.formTitle}>Login</h2>
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
        <button type="submit" className={formStyles.formButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;

