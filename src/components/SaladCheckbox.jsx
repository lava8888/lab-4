import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
class SaladCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          className="margin-right"
          id={this.props.selection}


          name={this.props.selection}


          type="checkbox"
          checked={this.props.selected}
          onChange={this.props.handling}
        />
        <Link to={"/view-ingredient/" + this.props.selection}>
          <label className="ml-3" style={{ width: '100%' }} htmlFor={this.props.selection} >
            {this.props.selection}
          </label>
        </Link>
      </div>
    );
  }
}

export default SaladCheckbox;
