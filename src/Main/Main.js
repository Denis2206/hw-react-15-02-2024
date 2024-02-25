import BookList from "./BookList";
import Authors from "./Authors";

const Main = () => {
    const bookList = [
        {
            namebook: "Властелин Колец",
            image: "/images/lotr.webp",
            authorId: 1,
            author: "Толкин Джон Рональд Руэл",
            genre: "эпическое фэнтези, приключения",
            pages: "752 страниц",
            scansId: 1,
        },
        {
            namebook: "Гарри Поттер и Философский камень",
            image: "/images/harry.webp",
            authorId: 2,
            author: "Джоан Кэ́тлин Роулинг",
            genre: "фэнтези",
            pages: "432 страницы",
            scansId: 2,
        },
    ];

    return (
        <main>
            <div className="container">
                <BookList bookList={bookList} />
            </div>
        </main>
    );
};

export default Main;
