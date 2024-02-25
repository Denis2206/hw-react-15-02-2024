import {Link, Outlet} from "react-router-dom";

const Book = (props) => {
    return (
        <div className="book">
            <p id="book-name">{props.namebook}</p>
            <img src={props.image} alt={props.name} id="book-img" />
            {/* <p>{props.fullname}</p> */}
            <p>
                <Link to={`./main/authors/${props.authorId}`}>{props.author}</Link>
            </p>
            <p>{props.genre}</p>
            <p>
                {props.pages} <Link to={`./main/scans/${props.scansId}`}>(сканы)</Link>
            </p>

            {/* <Outlet /> */}
        </div>
    );
};

export default Book;
