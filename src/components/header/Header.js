import { NavLink } from "react-router-dom";
import { useState } from 'react';
import logoIcon from '../../image/MessageApp_logo.svg';
import menuAdaptive from './../../image/menuAdaptive.svg';
import styles from './Header.module.css';

const navigationLinks = [
    { text: 'Home', link: '/' },
    { text: 'Note', link: '/note' },
    { text: 'Create', link: '/create' },
    { text: 'About', link: '/about' },
]

export function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    function viewMobileMenu(event) {
        event.preventDefault();
        setNavbarOpen((prev) => !prev);
        console.log(navbarOpen)
    }

    function closeMenuMobile() {
        setNavbarOpen(false);
    }

    const namAdaptiveMenu = navigationLinks.map(({ text, link }, index) => 
    <li key={index}><NavLink className={styles.menuItemMobile} to={link} onClick={closeMenuMobile}>{text}</NavLink></li>
    );


    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerWrapperNav}>
                <div>
                    <img src={logoIcon} alt="Логотип Message App" />
                </div>
                <nav className={styles.navWrapper}>
                    <ul className={styles.navMenu}>    
                        {navigationLinks.map(({ text, link }, index) => 
                            <li key={index}><NavLink className={styles.menuItem} to={link}>{text}</NavLink></li>
                        )}
                    </ul>
                </nav>  
                <button className={styles.mobileMenuButton} onClick={viewMobileMenu}>
                    <img src={menuAdaptive} alt="Мобільна навігація" />
                    {/* {navbarOpen ? 'close' : 'open'} */}
                </button> 
                <ul className={styles.mobileMenuToogle}>
                    {navbarOpen && namAdaptiveMenu}
                </ul>
            </div>
           
        </div>
    );
}
