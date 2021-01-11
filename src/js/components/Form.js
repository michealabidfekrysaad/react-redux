import React, { Component } from "react";
import { connect } from "react-redux";
// import { AddMovie } from "../store/AddMovieAction";


class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    // console.log(title)
    this.props.AddMovie({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
          placeholder="enter your movie name"
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" disabled={!title}>Search</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    AddMovie: ({title}) => dispatch({ type: "DATA_LOADED", value: title })
  };
}


const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;