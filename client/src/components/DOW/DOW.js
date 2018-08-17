import React from "react";

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
          <input
            name="daily"
            type="checkbox"
            checked={this.state.daily}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Sun:
          <input
            name="sun"
            type="checkbox"
            checked={this.state.sun}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Mon:
          <input
            name="mon"
            type="checkbox"
            checked={this.state.mon}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Tue:
          <input
            name="tue"
            type="checkbox"
            checked={this.state.tue}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Wed:
          <input
            name="wed"
            type="checkbox"
            checked={this.state.wed}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Thu:
          <input
            name="thu"
            type="checkbox"
            checked={this.state.thu}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Fri:
          <input
            name="fri"
            type="checkbox"
            checked={this.state.fri}
            onChange={this.handleInputChange} />
        </label>
        <span> </span>
        <label>
          Sat:
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
