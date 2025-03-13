// src/components/Signup.js
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import Link from 'next/link';

const Signup = () => {
  return (
    <>
    <Header/>
    <div className="signup-container">
      <div className="signup-header">
        <h1>Signup</h1>
        <p>Join us and get started!</p>
      </div>
      <form className="signup-form">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit" className="submit-button">Signup</button>
      </form>
      <p>
          Already Have Account <Link href="/login">Login</Link>
        </p>
    </div>
    <Footer/>
    </>
  );
};

export default Signup;
