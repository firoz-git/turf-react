// Header.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Header.css'; // Make sure to create the necessary CSS styles here
import { Link } from 'react-router-dom';

const Header = () => {
    const headerRef = useRef(null);
    const [logo, setLogo] = useState("images/Home-1/sky-logo-header.png")
    const [linkColor, setLinkColor] = useState('#1746a2'); // Default color

    useEffect(() => {
        const header = headerRef.current;
        const stickyNav = header.offsetTop;

        const handleScroll = () => {
            // console.log(window.pageYOffset, 'iam pageoffset')
            // console.log(stickyNav, 'iam stickyNav')
            if (window.pageYOffset > stickyNav) {
                header.classList.add('header-top-sky');
                console.log('image1')
                setLogo("images/Home-1/sky-logo-header-white.png")
                setLinkColor('#ffffff')
            } else {
                header.classList.remove('header-top-sky');
                setLogo("images/Home-1/sky-logo-header.png")
                setLinkColor('#1746a2')
                console.log('image2')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--link-color', linkColor);
    }, [linkColor]);

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
                                src={logo} alt="#" /></a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to='/' ><a style={{ color: linkColor }} title="Home">Home</a></Link>
                                </li>
                                <li className="dropdown ">
                                    <Link to='/reservation' ><a style={{ color: linkColor }} href="reservation_1.html" >RESERVATION</a></Link>
                                </li>
                                <li><Link to='/about'><a style={{ color: linkColor }} href="about.html" title="About" >About</a></Link></li>
                                <li><Link to='/contact'><a style={{ color: linkColor }} href="contact.html" title="Contact">Contact</a></Link></li>
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
