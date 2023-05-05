import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })
    const collectData = async () => {
        //console.warn(name, email, password);

        
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

        <div class=" inline-grid  mt-20">
            <h1 class='text-center font-bold text-lg '>Register</h1>
            <label class="text-left font-bold text-sky-300 mt-8">*Username*</label>
            <input class=" w-72 outline outline-offset-2 outline-1  rounded-md mt-1 " type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" /><br />
            <label class="text-left font-bold text-sky-300 ">*Email*</label>
            <input class=" peer  w-72 outline outline-offset-2 outline-1  rounded-md mt-1 " type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" /><br />
            <p class="invisible peer-invalid:visible text-pink-600 text-sm"> Please provide a valid email address.</p>
            <label class="text-left font-bold text-sky-300">*Password*</label>
            <input class=" w-72 outline outline-offset-2 outline-1  rounded-md mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" /><br />
            <button onClick={collectData} class=' rounded-lg outline outline-offset-2 outline-2 text-center mt-8 bg-green-500' > Sign Up </button>
        </div>

    )
}

export default SignUp;