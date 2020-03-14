import React, { Component } from "react";

export class LinkCreate extends Component {
  state = {
    error: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.refs.input.value);
    Meteor.call("links.insert", this.refs.link.value, error => {
      if (error) {
        this.setState({
          error: "Enter a valid URL"
        });
      } else {
        this.setState({ error: "" });
        this.refs.link.value = "";
      }
      // console.log("error --- ", error);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten</button>
      </form>
    );
  }
}

export default LinkCreate;
