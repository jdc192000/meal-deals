import React from "react";
import "./DOW.css";

class DOW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daily: true,
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.props.onInputChange(this.state);
  }

  render() {
    return (
      <div>
        <label>
          Daily:
          <span> </span>
          <input
            name="daily"
            type="checkbox"
            checked={this.state.daily}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Sun:
          <span> </span>
          <input
            name="sun"
            type="checkbox"
            checked={this.state.sun}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Mon:
          <span> </span>
          <input
            name="mon"
            type="checkbox"
            checked={this.state.mon}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Tue:
          <span> </span>
          <input
            name="tue"
            type="checkbox"
            checked={this.state.tue}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Wed:
          <span> </span>
          <input
            name="wed"
            type="checkbox"
            checked={this.state.wed}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Thu:
          <span> </span>
          <input
            name="thu"
            type="checkbox"
            checked={this.state.thu}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Fri:
          <span> </span>
          <input
            name="fri"
            type="checkbox"
            checked={this.state.fri}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Sat:
          <span> </span>
          <input
            name="sat"
            type="checkbox"
            checked={this.state.sat}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <br />
      </div>
    );
  }
}

export default DOW;
