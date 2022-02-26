import { Component } from "react";

// function SaladSelect(props) {
//   console.log("Props: ", props);
//   return <option value={props.selection}>{props.selection}</option>;
// }

// export default SaladSelect;

class SaladSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const inventory = this.props.inventory;
    return <option value={this.props.selection}>{this.props.selection}</option>;
  }
}

export default SaladSelect;
