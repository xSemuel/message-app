import { NavLink } from "react-router-dom";
import logoIcon from "../../image/MessageApp_logo.svg";
import styles from './Header.module.css';

const navigationLinks = [
    { text: 'Home', link: '/' },
    { text: 'Note', link: '/note' },
    { text: 'Create', link: '/create' },
    { text: 'About', link: '/about' },
]

export function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerWrapperNav}>
                <div>
                    <img src={logoIcon} alt="Логотип Message App" />
                </div>
                <nav>
                    <ul className={styles.navMenu}>    
                        {navigationLinks.map(({ text, link }, index) => 
                            <li key={index}><NavLink exact className={styles.menuItem} to={link}>{text}</NavLink></li>
                        )}
                    </ul>
                </nav>   
            </div>
        </div>
    );
}
