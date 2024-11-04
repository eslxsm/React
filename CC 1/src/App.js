import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleSignInClick = () => {
        setShowLogin(true);
        setShowSignup(false); // Hide signup if login is clicked
    };

    const handleSignUpClick = () => {
        setShowSignup(true);
        setShowLogin(false); // Hide login if signup is clicked
    };
    const handleLoginSuccess = () => {
        setShowLogin(false);
        setShowSignup(false);
    };
    return (
        <div className="App">
            <header>
                <h1>Online Gift Shop</h1>
                <nav>
                    <button aria-label="Home">Home</button>
                    <button aria-label="Products">Products</button>
                    <button aria-label="Cart">Cart</button>
                    <button aria-label="Contact">Contact</button>
                    {!showLogin && !showSignup && (
                        <>
                            <button onClick={handleSignInClick} aria-label="Sign In">Sign In</button>
                            <button onClick={handleSignUpClick} aria-label="Sign Up">Sign Up</button>
                        </>
                    )}
                </nav>
            </header>
            {showLogin ? (
                <Login onLoginSuccess={handleLoginSuccess} />
            ) : showSignup ? (
                <Signup onSignupSuccess={handleLoginSuccess} />
            ) : (
                <Home />
            )}
        </div>
    );
};
export default App;