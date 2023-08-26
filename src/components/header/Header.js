import { NavLink } from "react-router-dom";
import logoIcon from '../../image/MessageApp_logo.svg';
import { NAVIGATION_LINKS } from '../../constants';
import { Burgermenu } from "./Burgermenu";
import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerWrapperNav}>
                <div>
                    <img src={logoIcon} alt="Логотип Message App" />
                </div>
                <nav className={styles.navWrapper}>
                    <ul className={styles.navMenu}>    
                        {NAVIGATION_LINKS.map(({ text, link }, index) => 
                            <li key={index}><NavLink className={styles.menuItem} to={link}>{text}</NavLink></li>
                        )}
                    </ul>
                </nav>  
                <Burgermenu />    
            </div>                
        </div>
    )
}
