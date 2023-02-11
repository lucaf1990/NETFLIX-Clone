/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import MyMoviesCard from "./MyMoviesCard";

class Body extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <Dropdown
              style={{ backgroundColor: "#221f1f", borderRadius: "10px" }}
            >
              <Dropdown.Toggle
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0 m-2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f", borderRadius: "10px" }}
              >
                Geners
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{ backgroundColor: "#221f1f", borderRadius: "10px" }}
              >
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Commedy
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Drama
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="fa fa-th-large icons" />
            <i className="fa fa-th icons" />
          </div>
        </div>
        <h4 className="mt-3 text-left">Trending Now Commedy</h4>
        <MyMoviesCard title={"this"} />
        <h4 className=" text-left">Watch it Again Harry Potter</h4>
        <MyMoviesCard title={"harry potter"} />
        <h4 className=" text-left">Because you watched You</h4>
        <MyMoviesCard title={"you"} />
        <h4 className=" text-left">Titles you can't miss</h4>
        <MyMoviesCard title={"game"} />
        <h4 className=" text-left">If you fell Melancholic</h4>
        <MyMoviesCard title={"old"} />
      </div>
    );
  }
}
export default Body;
