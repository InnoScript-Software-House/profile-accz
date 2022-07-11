import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import gmail from '../assets/images/gmail.png';
import behance from '../assets/images/behance.png';
import linkedin from '../assets/images/linkedin.png';
import skype from '../assets/images/skype.png';
import '../assets/css/header.css';

const mainMenu = [
    { name: "Work", path:"/"},
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume"}
];

const socialMediaMenu = [
    { name: "linkedin", path:"https://linkedin.com/in/aye-chyo-chyo-zin-8b2460149/", icon:linkedin },
    { name: "Behance", path: "https://behance.net/ayechyochyozin", icon:behance },
    { name: "skype", path: "https://join.skype.com/invite/wc8Phn1UVtPu", icon: skype },
    { name: "Gmail", path: "mailto://ayechyochyozin2016@gmail.com", icon: gmail }
];

const Header = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="navbar-brand">
                <img src={logo} className="logo" title='Aye Chyo Chyo Zin' alt='Aye Chyo Chyo Zin' />
            </div>

            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {mainMenu.map((menu, index) => {
                        return(
                            <li className="nav-item" key={`main_menu_id_${index}`}>
                                <NavLink to={menu.path} className="nav-link"> 
                                    {menu.name} 
                                    {menu.html && (<div dangerouslySetInnerHTML={{__html: menu.html}} />)}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='navbar-text'>
                {socialMediaMenu.map((menu, index) => {
                    return(
                        <div className='footer-link'key={`social_media_menu_id_${index}`} onClick={() => {
                            window.open(menu.path, '_blank');
                        }}> 
                            <img src={menu.icon} className="icon" alt={menu.name} title={menu.name} />
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Header;