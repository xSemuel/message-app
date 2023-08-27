import notFound from '../../image/404NotFound.png';
import styles from './NoteNotFound.module.css';

export function NoteNotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <h3> Помилка 404. Сторінка на яку Ви посилаєтесь не знайдено!</h3>
            <div>
                <img className={styles.imgNotFound} src={notFound} alt="Сторінка не знайдена" />
            </div>
        </div>
    );
}
