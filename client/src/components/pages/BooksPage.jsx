// import React from "react";
import "../../styles/book.css";
import BookForm from "../Form/BookForm";

const BooksPage = () => {
  return (
    <div>
      <h2>Welcome to the Books Page!</h2>
      <div className="list-books"></div>
      <div className="register-book">
        <BookForm />
      </div>
    </div>
  );
};

export default BooksPage;
