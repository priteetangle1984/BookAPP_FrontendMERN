import { Link } from "react-router-dom";
import "../App.css";
import openbook from "../assets/openbook.jpg";

const BookCard = ({ book }) => {
  return (
    <div className="card-container">
      <img src={openbook} alt="Books" height={200} />
      <div className="desc">
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
