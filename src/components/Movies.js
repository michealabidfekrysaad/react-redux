import React, { Component } from "react";
import { connect } from "react-redux";
// import { addArticle } from "../actions/index";
// import { Card} from "antd";

// const { Meta } = Card;

export class Movies extends Component {
  render() {
    return (
      <div className="App books-list">
        {this.props.movies.length !== 0 ? (
          this.props.movies.map((el, index) => {
            const {
              authors,
              imageLinks,
              description,
              previewLink,
            } = this.props.movies[index].volumeInfo;
            return (
              <div className="book" key={el.id}>
                <div className="card">
                  <img
                    src={
                      imageLinks
                        ? imageLinks.thumbnail
                        : "https://via.placeholder.com/150"
                    }
                    alt="Avatar"
                  />
                  <a href={previewLink ? previewLink : "https://www.google.com"}>
                    <div className="container">
                      <h4>
                        <b>{authors ? authors[0].slice(0, 10) : "no author"}</b>
                      </h4>
                      <p>
                        {description
                          ? description.slice(0, 50)
                          : "it is very nice book"}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })
        ) : this.props.error ? (
          <div className="book">
            <span style={{ color: "red" }}>the error: {this.props.error}</span>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.remoteMovies,
    error: state.error,
  };
}

export default connect(mapStateToProps, null)(Movies);
