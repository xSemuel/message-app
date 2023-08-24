import { useEffect, useState, createRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as noteApi from '../../api/note.api';

import styles from './Note.module.css'

export function Note() {
    const { noteURL } = useParams();
    const history = useNavigate()

    const [note, setNote] = useState('');
    const [isError, setIsError] = useState(false);
    const searchRef = createRef();
    
    useEffect(() => {
        if (noteURL === undefined) return

        noteApi.getNote(noteURL)
            .then(response => {
                if (response.result) {
                    setNote(response.note);
                    setIsError(false)
                } else {
                    setIsError(true)
                }
            });
    }, [noteURL]);

    function searchNote(event) {
        event.preventDefault();
        const noteHash = event.target.elements.url.value.trim();
        if (noteHash === '') {
            alert('Заповніть поля');
            return false;
        }
        searchRef.current.value = '';
        history(`/note/${noteHash}`)
    }

    function resetNote() {
        setNote('')
        history('/note')
    }

    return (
        <div className={styles.wrapper}>
            {note && <div>
                <h3>Note:</h3>
                <div><p>{note}</p></div>
                <div><button onClick={resetNote}>Дивитись ще один note</button></div>
            </div>}
            {isError && <div>
                <p>Відбулася помилка, такий хеш не знайдено. Спробуйте ще раз:</p><br />
            </div>}
            {!note && <div>
                <form action="" onSubmit={searchNote}>
                    <label htmlFor="url"> Введіть хеш замітки</label>
                    <input className={styles.searchInput} ref={searchRef} type="text" name="url" />
                    <button type="submit">Пошук Note</button>
                </form>
            </div>}
        </div>
    );
}