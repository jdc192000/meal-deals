import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class DrinkDetail extends Component {
  state = {
    drinkspecial: []
  }; 

  componentDidMount() {
    API.getdrinkSpecial(this.props.match.params.id)
      .then(res => this.setState({ drinkspecial: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.drinkspecial.special} for ${this.state.drinkspecial.price}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Details:</h1>
              <p>
                {this.state.drinkspecial.details}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/DrinkSpecials">← Back to drink specials</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DrinkDetail;
