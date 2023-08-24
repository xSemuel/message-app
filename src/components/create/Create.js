import { useState } from 'react';
import * as noteApi from '../../api/note.api';
import styles from './Create.module.css';

export function Create() { 
    const [note, setNote] = useState('');

    const createNote = (obj) => {
        noteApi.createNote(obj)
            .then( response => {
                if (!response.result) return
                setNote(response.url);
            })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const note = event.target.elements.note.value.trim();
        if (note === '') {
            alert('Заполните поля')
            return;
        }
        createNote({ note })
    }

    function resetNote() {
        setNote('')
    }

    return (
        <div>
            {note ? (<div>
                <h3>Хеш замітки: </h3>  
                <div className={styles.createHesh}>{note}</div>
                <div>
                    <button onClick={resetNote}>Створити нову замітку</button>
                </div> 
            </div>) :
            (<form onSubmit={onSubmit}>
                <label htmlFor="note">Введіть замітку: </label>
                <textarea name="note" className={styles.searchInput} placeholder="Введіть текст замітки:" />
                <button type="submit">Створити</button>
            </form>)}
        </div>
    );
}