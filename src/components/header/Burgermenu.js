import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from '../../constants'
import menuAdaptive from './../../image/menuAdaptive.svg';
import styles from './Header.module.css';

export function Burgermenu() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    function viewMobileMenu(event) {
        event.preventDefault();
        setNavbarOpen((prev) => !prev);
        console.log(navbarOpen)
    }

    function closeMenuMobile() {
        setNavbarOpen(false);
    }

    const namAdaptiveMenu = NAVIGATION_LINKS.map(({ text, link }, index) => 
    <li key={index}><NavLink className={styles.menuItemMobile} to={link} onClick={closeMenuMobile}>{text}</NavLink></li>
    );

    return ( 
        <div>
            <button className={styles.mobileMenuButton} onClick={viewMobileMenu}>
                <img src={menuAdaptive} alt="Мобільна навігація" />
                {/* {navbarOpen ? 'close' : 'open'} */}
            </button> 
            <ul className={styles.mobileMenuToogle}>
                {navbarOpen && namAdaptiveMenu}
            </ul>
        </div>
     );
}
 