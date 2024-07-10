import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='container navWrapper'>
            <div className='NavContainer'>
                <a href="/">
                    <h1>Logo</h1>
                </a>
                <nav className='navbar'>
                    <div className='logo'>
                    </div>
                    <ul className='navItem'>
                        <li className='navMenu'><Link className='navLink' to="/">Home</Link></li>
                        <li className='navMenu'><Link className='navLink' to="/about">About</Link></li>
                        <li className='navMenu'><Link className='navLink' to="/contacts">Contacts</Link></li>
                        <li className='navMenu'><Link className='navLink' to="/skills">Skills</Link></li>
                        <li className='navMenu'><Link className='navLink' to="/portfolio">Portfolio</Link></li>
                        <li className='navMenu'><Link className='navLink' to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
