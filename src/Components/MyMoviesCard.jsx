import { Component } from "react";
import OnLoadErorr from "./OnLoadError";
import Loading from "./Loading";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardTitle from "./CardTitle";

class MyMoviesCard extends Component {
  state = {
    query: [],
    error: false,
    loading: true,
    Title: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=b4ea246b&s=${this.props.title}`
      );

      if (response.ok) {
        let data = await response.json();
        let Title = {};
        data.Search.forEach((movie) => {
          Title[movie.imdbID] = false;
          console.log("this one " + Title[movie.imdbID]); //oggetto oggetto
        });
        this.setState({
          query: data.Search,
          loading: false,
          error: false,
          Title: Title,
        });
      } else {
        alert("Mmm.. Somenthing went wrong. Please check the URL!");
        this.setState({ loading: false, error: true });
      }
    } catch (err) {
      alert("Mmm.. Somenthing went wrong. Please check and try again!" + err);
      this.setState({ loading: false, error: true });
    }
  };

  handleCardOver = (imdbID) => {
    let Title = { ...this.state.Title };
    console.log(Title);
    Title[imdbID] = !Title[imdbID];
    this.setState({ Title: Title });
  };

  render() {
    return (
      <>
        <div
          id="queries"
          className="w-100 d-flex justify-content-between mb-5 mt-4"
        >
          {this.state.loading && <Loading />}
          {this.state.error && <OnLoadErorr />}
          {this.state.query

            .filter((movie) => movie.Year > "2000")
            .slice(0, 6)
            .map((movie) => (
              <Container
                key={movie.imdbID}
                id="card"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#221f1f",
                  width: "25rem",
                }}
              >
                <Row>
                  <Col>
                    <Card.Img
                      onMouseEnter={() => !this.handleCardOver(movie.imdbID)}
                      onMouseLeave={() => this.handleCardOver(movie.imdbID)}
                      variant="top"
                      style={{ backgroundColor: "#221f1f", height: "20rem" }}
                      src={movie.Poster}
                    />
                  </Col>
                </Row>
                {this.state.Title[movie.imdbID] && (
                  <CardTitle Title={movie.Title} />
                )}
              </Container>
            ))}
        </div>
      </>
    );
  }
}

export default MyMoviesCard;
