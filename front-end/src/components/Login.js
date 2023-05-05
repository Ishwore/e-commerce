import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login =() =>{


    const[email,setEmail] = React.useState('');
    const[password,setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleLogin = async() =>{
        console.warn("email,password",email,password);
        const userLogin =  await fetch("http://localhost:5000/login",{
            method :'post',
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const resultLogin = await userLogin.json();
        console.warn(resultLogin);
        if(resultLogin.name){
            localStorage.setItem("user",JSON.stringify(resultLogin));
            navigate("/");
        }else{
            alert("Please enter correct details");
        }
    }
 return(
    <div class =" inline-grid  mt-20">
        <h1 class='text-center font-bold text-lg '>Login  </h1>
        <label class="text-left font-bold text-sky-300 mt-8">*Email*</label>
        <input type='email' class=" form-input w-72 outline outline-offset-2 outline-1  rounded-md mt-2" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value) }/>
        <label class="text-left font-bold text-sky-300 mt-5">*Password*</label>
        <input type='password' class=" w-72 outline outline-offset-2 outline-1  rounded-md mt-2" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value) } />
        <button onClick={handleLogin} class=' outline outline-offset-2 outline-1 text-center mt-12 rounded-lg bg-green-500' >Login</button>

    </div>
 )
}

export default Login;