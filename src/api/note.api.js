import env from '../env.json';

export function createNote (obj) {
    return fetch(env.urlBackend, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(obj)
    })
    .then( response => response.json())
}

export function getNote(noteURL) {
    return fetch(env.urlBackend, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL })
    })
    .then(response => response.json())
}

