import React from 'react'
import '../assets/css/footer.css'
import gmail from '../assets/images/gmail.png';
import behance from '../assets/images/behance.png';
import linkedin from '../assets/images/linkedin.png';
import skype from '../assets/images/skype.png';
import { Link } from 'react-router-dom';

const socialMediaMenu = [
    { name: "linkedin", path: "https://linkedin.com/in/aye-chyo-chyo-zin-8b2460149/", icon: linkedin },
    { name: "Behance", path: "https://behance.net/ayechyochyozin", icon: behance },
    { name: "skype", path: "https://join.skype.com/invite/wc8Phn1UVtPu", icon: skype },
    { name: "Gmail", path: "mailto://ayechyochyozin2016@gmail.com", icon: gmail }
];
const Footer = () => {
    return (
        <>
            <div className='row justify-content-center align-items-center'>
                <label className='footer-label'>Let's keep in touch with me!</label>
            </div>
            <div className='row justify-content-center align-items-center'>
                {socialMediaMenu.map((menu, index) => {
                    return (
                        <Link
                            key={`social_media_menu_id_${index}`}
                            to={{ pathname: menu.path }}
                            target="_blank"
                        >
                            <img src={menu.icon} className="footer-icon" alt={menu.name} title={menu.name} />
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Footer