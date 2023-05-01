import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })
    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/registers', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');

    }
    return (
        <div >
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br />
            <input className="inputBox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br />
            <button onClick={collectData} className="appButton" type="button" > Sign Up </button>
        </div>
    )
}

export default SignUp;