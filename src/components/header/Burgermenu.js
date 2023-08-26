import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from '../../constants'
import menuAdaptive from './../../image/menuAdaptive.svg';
import styles from './Header.module.css';

export function Burgermenu() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    function viewBurgerMenu(event) {
        event.preventDefault();
        setNavbarOpen((prev) => !prev);
        console.log(navbarOpen)
    }

    function closeBurgerMenu() {
        setNavbarOpen(false);
    }

    const navAdaptiveMenu = NAVIGATION_LINKS.map(({ text, link }, index) => 
    <li key={index}><NavLink className={styles.burgerMenuItem} to={link} onClick={closeBurgerMenu}>{text}</NavLink></li>
    );

    return ( 
        <div>
            <button className={styles.burgerMenuButton} onClick={viewBurgerMenu}>
                <img src={menuAdaptive} alt="Мобільна навігація" />
                {/* {navbarOpen ? 'close' : 'open'} */}
            </button> 
            { navbarOpen && <ul className={styles.burgerMenuToogle}>
                {navAdaptiveMenu}
            </ul>}
        </div>
     );
}
 