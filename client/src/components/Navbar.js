import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../components/images/logo.png'

function Navbar () {

    const [side, openSide] = useState(false);

    const toggle = () => openSide(!side);
    const closeSide = () => openSide(false);



    return(
        <nav>
            <div className='logo'>
                <Link to='/' onClick={closeSide}>
                    <img alt='logo' src={logo} />    
                </Link>
            </div>

            <ul className={side ? 'show' : ''}>
                <li><Link to="/" onClick={closeSide}>home</Link ></li>
                <li><Link to="/about" onClick={closeSide}>about</Link ></li>
                <li><Link to="#">service</Link></li>
                <li><Link to="/contacts" onClick={closeSide}>conacts</Link ></li>
                <li><Link to="/account" onClick={closeSide}>account</Link ></li>
            </ul>

            <div className={side ? 'toggle' : 'burger'} onClick={toggle}> 
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

    </nav>
    );
}

export default Navbar;