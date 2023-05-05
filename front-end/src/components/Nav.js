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
        <nav>
            <div>
                <ul className='nav-ul'>
                    <li><Link to ="/">Products </Link></li>
                    <li><Link to ="/add">Add Product </Link></li>
                    <li><Link to ="/update">Update Product </Link></li>
                    <li><Link to ="/profile">Profile </Link></li>
                    <li><Link to ="/login">Login</Link> </li>
                    <li>{auth ? <Link onClick={logout} to ="/signup">Logout </Link>:
                     <Link to ="/signup">Register</Link> }</li>

                </ul>
            </div>
        </nav>
    )
}
export default Nav;