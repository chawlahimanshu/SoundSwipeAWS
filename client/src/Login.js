import React from "react";

const Login = () => {
    const handleLogin = () => {
        window.location.href = "http://localhost:3001/login"; // Redirects to Spotify authentication
    };

    return (
        <div style={{ textAlign: "center" , marginTop: "20%" }}>
            <h1>Welcome to Sound Swipe</h1>
            <button onClick={handleLogin} style={{padding: "10px 20px", fontSize: "18px" , cursor: "pointer"}}>
                Login with Spotify
            </button>
        </div>
    );
};

export default Login;
