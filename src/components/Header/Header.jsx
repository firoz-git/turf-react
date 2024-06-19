// Header.jsx
import React, { useEffect, useRef } from 'react';
import './Header.css'; // Make sure to create the necessary CSS styles here
import { Link } from 'react-router-dom';

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const stickyNav = header.offsetTop;

        const handleScroll = () => {
            // console.log(window.pageYOffset, 'iam pageoffset')
            // console.log(stickyNav, 'iam stickyNav')
            if (window.pageYOffset > stickyNav) {
                header.classList.add('header-top-sky');
            } else {
                header.classList.remove('header-top-sky');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className="header-sky">
            <div className="menu-header">
                <nav className="navbar navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header ">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar "></span>
                                <span className="icon-bar "></span>
                                <span className="icon-bar "></span>
                            </button>
                            <a className="navbar-brand" href="file:///E:/Xampp/htdocs/skyline/index.html" title="Skyline"><img
                                src="images/Home-1/sky-logo-header.png" alt="#" /></a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to='/' ><a title="Home">Home</a></Link>
                                </li>
                                <li className="dropdown ">
                                    <Link to='/reservation' ><a href="reservation_1.html" >RESERVATION</a></Link>
                                </li>
                                <li><Link to='/about'><a href="about.html" title="About">About</a></Link></li>
                                <li><Link to='/contact'><a href="contact.html" title="Contact">Contact</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* </div> */}
        </header>
    );
};

export default Header;
