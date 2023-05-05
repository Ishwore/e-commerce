import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <nav class =" bg-sky-500 h-10">
            <div >
                <ul class='inline-flex space-x-8 p-3'>
                    <li><Link to ="/">Products </Link></li>
                    <li><Link to ="/add">Add Product </Link></li>
                    <li><Link to ="/update">Update Product </Link></li>
                    <li><Link to ="/profile">Profile </Link></li>
                        {
                            auth ? <li><Link onClick={logout} to ="/signup">Logout </Link></li>
                            :<>
                            <li><Link to ="/signup">SignUp</Link> </li>
                           <li> <Link to ="/login">Login</Link> </li>
                           </>
                        }
                </ul>
            </div>
        </nav>
    )
}
export default Nav;