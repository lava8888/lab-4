import { Component } from "react";

class ViewOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeSalad = this.removeSalad.bind(this);
  }

  // Lyfter funktionen "uppåt" till ViewOrder -- viktigt att göra *bind* som ovan
  removeSalad() {
    this.props.remove(this.props.salad);
  }

  render() {
    let salad = this.props.salad;
    let foundation = this.props.foundation;
    let protein = this.props.protein;
    let extras = this.props.extras;
    let dressing = this.props.dressing;

    return (
      <div key={salad.uuid} className="card mb-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Foundation: {foundation}</li>
          <li className="list-group-item">Protein: {protein}</li>
          <li className="list-group-item">
            Extras: {extras + " - (" + salad.count("extra") + ")"}
          </li>
          <li className="list-group-item">Dressing: {dressing}</li>
        </ul>
        <div className="card-header fw-bolder">
          Price for this salad: {salad.getPrice()}kr
          <button
            className="btn btn-outline-danger ms-2"
            onClick={this.removeSalad}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default ViewOrderCard;
