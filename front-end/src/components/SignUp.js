import React, { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
        result = await result.json()
        console.warn(result);
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