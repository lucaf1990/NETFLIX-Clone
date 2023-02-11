import { Component } from "react";

class CardTitle extends Component {
  state = {
    title: false,
  };
  render() {
    return (
      <div
        className="mt-3 mb-2 d-flex justify-content-center align-items-center w-100 h-25"
        style={{ border: "solid black 1px", fontSize: "1em" }}
      >
        <p className="text-white display-5">{this.props.Title} </p>
      </div>
    );
  }
}
export default CardTitle;
