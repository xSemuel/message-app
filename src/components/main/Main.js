import { NavLink } from "react-router-dom";
import styles from './Main.module.css';

const actionButtons = [
    { link: '/create', text: 'Створити Note' },
    { link: '/note', text: 'Подивитись Note' },
]

export function Main() {
    return (
        <div className={styles.mainWrapper}>
            {actionButtons.map(({ link, text }) => (
                <button key={link} className={styles.actionButton}>
                    <NavLink exact to={link}>{text}</NavLink>
                </button>
            ))}
        </div>
    );
}