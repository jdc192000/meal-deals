import React, { Component } from "react";
import Nav from "../../components/Nav";
import Location from "../../components/Location";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import DOW from "../../components/DOW";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class FoodSpecials extends Component {
  state = {
    foodSpecial: [],
    special: "",
    price: "",
    details: "",
    timeofday: "",
    daily: "",
    sun: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
    days: []
  };

  componentDidMount() {
    this.loadfoodSpecial();
  }

  loadfoodSpecial = () => {
    API.getfoodSpecial()
      .then(res =>
        this.setState({ foodSpecial: res.data, specail: "", price: "", details: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadfoodSpecial())
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
      console.log(this.state.special, this.state.price, this.state.timeofday);
      console.log("Daily: " + this.state.daily);
      console.log("Mon: " + this.state.mon);
      console.log("Tue: " + this.state.tue);
      console.log("Wed: " + this.state.wed);
      console.log("Thu: " + this.state.thu);
      console.log("Fri: " + this.state.fri);
      // })
      // .then(res => this.loadfoodSpecial())
      // .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <Container fluid>
        <div>
          <Nav>
            Food Specials
         </Nav>
        </div>
        <Location>
          <h1>Restaurant Name Goes Here</h1>
          <h5>Address Goes Here</h5>
          <h6>City And State Here</h6>
        </Location>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add New Special</h1>
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
              <h1>Daily Specials</h1>
            </Jumbotron>
            {this.state.foodSpecial.length ? (
              <List>
                {this.state.foodSpecial.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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
