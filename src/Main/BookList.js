import Book from "./Book";

const BookList = (props) => {
    return (
        <div className="book-list">
            {props.bookList.map((book, index) => (
                <Book
                    key={index}
                    namebook={book.namebook}
                    image={book.image}
                    author={book.author}
                    authorId={book.authorId}
                    genre={book.genre}
                    pages={book.pages}
                    scansId={book.scansId}
                />
            ))}
        </div>
    );
};

export default BookList;
