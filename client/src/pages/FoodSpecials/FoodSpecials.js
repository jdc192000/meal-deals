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
import "./FoodSpecials.css";

class FoodSpecials extends Component {
  state = {
    foodspecials: [],
    special: "",
    price: "",
    details: "",
    timeofday: "",
  };

  componentDidMount() {
    this.loadfoodSpecials();
  }

  loadfoodSpecials = () => {
    API.getfoodSpecials()
      .then(res =>
        this.setState({ foodspecials: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteFood = id => {
    API.deletefoodSpecial(id)
      .then(res => this.loadfoodSpecials())
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
      // API.saveFood({
      //   title: this.state.title,
      //   author: this.state.author,
      //   synopsis: this.state.synopsis
      // })
      //   .then(res => this.loadfoodSpecials())
      //   .catch(err => console.log(err));
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
              <h1>New Food Special</h1>
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
                  // className="currency"
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
                      Breakfast (Open - 10am)
                    </option>
                    <option
                      value="3">
                      Lunch (11am - 2pm)
                    </option>
                    <option
                      value="4">
                      Dinner (4pm - 7pm)
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
              <h1>Current Food Specials</h1>
            </Jumbotron>
            {this.state.foodspecials.length ? (
              <List>
                {this.state.foodspecials.map(food => (
                  <ListItem key={food.id}>
                    <Link to={"/FoodSpecials/" + food.id}>
                      <strong>
                        {food.special} for ${food.price}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteFood(food.id)} />
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

export default FoodSpecials;
