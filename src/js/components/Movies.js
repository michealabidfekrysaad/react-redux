import React, { Component } from "react";
import { connect } from "react-redux";
// import { addArticle } from "../actions/index";
// import { Card} from "antd";

// const { Meta } = Card;

export class Movies extends Component {


  render() {
    // const { authors, lastName, email, doSomethingAmazing } = this.props.movies.remotemovies;
    return (
      <div className="App books-list">
        {this.props.movies.map((el, index) => {
        const { authors, imageLinks, description} = this.props.movies[index].volumeInfo;
          return (
            <div className="book" key={el.id}>
              <div className="card">
                <img src={imageLinks? imageLinks.thumbnail: "https://via.placeholder.com/150"} alt="Avatar" />
                <div className="container">
                  <h4>
                    <b>{authors ? authors[0].slice(0,10) : "no author"}</b>
                  </h4>
                  <p>{description? description.slice(0,50): "it is very nice book"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.remoteMovies,
  };
}

export default connect(mapStateToProps,  null )(Movies);
