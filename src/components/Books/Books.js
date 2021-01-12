import React from "react";
import { connect } from "react-redux";
import BookDetails from "../BookDetails/BookDetails";
import "./Books.css";

const Books = (props) => {
  return (
    <div className="books-list">
      {props.movies.length !== 0 ? (
        props.movies.map(
          ({
            id,
            volumeInfo: { authors, imageLinks, description, previewLink },
          }) => {
            return (
              <div className="book" key={id}>
                <BookDetails
                  authors={authors}
                  imageLinks={imageLinks}
                  description={description}
                  previewLink={previewLink}
                />
              </div>
              // BookInfo={ authors : {authors}, imageLinks:{imageLinks}, description:{description} }
              // what is wrong with this syntax above and below
              // BookInfo={ authors = {authors}, imageLinks={imageLinks}, description={description} }
            );
          }
        )
      ) : props.error ? (
        <div className="book">
          <span style={{ color: "red" }}>the error: {props.error}</span>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.remoteMovies,
    error: state.error,
  };
};

export default connect(mapStateToProps, null)(Books);
