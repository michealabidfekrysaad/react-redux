import React from "react";
import { connect } from "react-redux";
import BookDetails from "../BookDetails/BookDetails";
import "./Books.css";

const Books = (props) => {
  return (
    <div className="books-list">
      {props.books ? (
        props.books.map(
          ({
            id,
            volumeInfo: { authors, imageLinks, description, previewLink },
          }) => {
            return (
              <div className="book" key={id}>
                <BookDetails
                  BookInfo={{ authors, imageLinks, description }}
                />
              </div>
              // BookInfo={ authors : {authors}, imageLinks:{imageLinks}, description:{description} }
              // what is wrong with this syntax above and below
              // BookInfo={ authors = {authors}, imageLinks={imageLinks}, description={description} }
            );
          }
        )
      ) : props.loading ? (
        <div className="loading">
          loading ya bashmohandes mostafa :) ............
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { items } = state.BooksReducer;
  return {
    books: items,
    loading: state.loader,
  };
};

export default connect(mapStateToProps, null)(Books);
