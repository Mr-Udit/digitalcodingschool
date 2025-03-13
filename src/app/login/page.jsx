// src/components/Login.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
    <Header/>
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <p>Welcome back! Please login to continue.</p>
        </div>
        <form className="login-form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p>
          New User <Link href="/signup">Create Account</Link>
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
