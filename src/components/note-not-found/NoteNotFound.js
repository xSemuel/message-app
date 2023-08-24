import notFound from '../../image/404NotFound.png';

export function NoteNotFound() {
    return (
        <div>
            <h3> Помилка 404. Сторінка на яку Ви посилаєтесь не знайдено!</h3>
            <div>
                <img src={notFound} alt="Сторінка не знайдена" />
            </div>
        </div>
    );
}
