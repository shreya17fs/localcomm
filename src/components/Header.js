import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
