import React, { Component } from "react";
import Location from "../../components/Location";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import DOW from "../../components/DOW";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./DrinkSpecials.css";

class DrinkSpecials extends Component {
  state = {
    drinkspecials: [],
    special: "",
    price: "",
    details: "",
    timeofday: "",
  };

  componentDidMount() {
    this.loaddrinkSpecials();
  }

  loaddrinkSpecials = () => {
    API.getdrinkSpecials()
      .then(res =>
        this.setState({ drinkspecials: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteDrink = id => {
    API.deletedrinkSpecial(id)
      .then(res => this.loaddrinkSpecials())
      .catch(err => console.log(err));
  };

  getDOWs = days => {
    console.log("Daily: " + days.daily);
    console.log("Mon: " + days.mon);
    console.log(this.state);
    console.log(days);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.special && this.state.price) {
      // API.saveBook({
      //   title: this.state.title,
      //   author: this.state.author,
      //   synopsis: this.state.synopsis
      // })
      // .then(res => this.loaddrinkSpecials())
      // .catch(err => console.log(err));
      console.log(this.state.special, this.state.price, this.state.timeofday);
    }
  };

  render() {
    return (

      <Container fluid>
        <Location>
          <h1>Restaurant Name Goes Here</h1>
          <h5>Address Goes Here</h5>
          <h6>City, State Goes Here</h6>
        </Location>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New Drink Special</h1>
            </Jumbotron>
            <form>
              <Col size="md-6">
                <h4>
                  Special:
                </h4>
                <Input
                  value={this.state.special}
                  onChange={this.handleInputChange}
                  name="special"
                  placeholder="(required)"
                />
              </Col>

              <Col size="md-2">
                <h4>
                  Price:
                </h4>
                <Input
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  name="price"
                  placeholder="(required)"
                />
              </Col>

              <Col size="md-12">
                <h4>
                  Details:
                </h4>
                <TextArea
                  value={this.state.details}
                  onChange={this.handleInputChange}
                  name="details"
                  placeholder="(optional)"
                />
              </Col>

              <Col size="md-12">
                <h4>
                  Day of week:
                </h4>
                <DOW onInputChange={this.getDOWs} />
              </Col>

              <Col size="md-12">
                <h4>
                  Time of day:
                </h4>
                <div>
                  <select name="timeofday"
                    value={this.state.timeofday}
                    onChange={this.handleInputChange}>
                    <option>
                      (required)
                    </option>
                    <option
                      value="1">
                      All day (Open - Close)
                    </option>
                    <option
                      value="2">
                      Happy Hour
                    </option>
                  </select>
                </div>
              </Col>

              <FormBtn
                disabled={!(this.state.special && this.state.price && this.state.timeofday)}
                onClick={this.handleFormSubmit}
              >
                Submit Special
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Drink Specials</h1>
            </Jumbotron>
            {this.state.drinkspecials.length ? (
              <List>
                {this.state.drinkspecials.map(drink => (
                  <ListItem key={drink.id}>
                    <Link to={"/DrinkSpecials/" + drink.id}>
                      <strong>
                        {drink.special} for ${drink.price}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteDrink(drink.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container >
    );
  }
}

export default DrinkSpecials;
