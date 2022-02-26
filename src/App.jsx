import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
//import inventory from "./inventory.ES6";
import ComposeSalad from "./components/ComposeSalad";
import ComposeSaladWrapper from "./components/ComposeSaladWrapper";
import ViewIngredient from "./components/ViewIngredient";
import Salad from "./components/Salad";


import ViewOrder from "./components/ViewOrder";
import { Link, Route, Routes } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salad: {}, inventory: {},
      shoppingCart: []
    };
    let inventory = {}
    let downloadedShoppingCart = window.localStorage.getItem('Salad')
    if (downloadedShoppingCart) {
      let cart = JSON.parse(downloadedShoppingCart)
      // oldSalad.price = () => en pris funktion
      let newCart = []
      cart.forEach((salad) => {
        let mySalad = new Salad();
        mySalad.foundation = salad.foundation
        mySalad.proteins = salad.proteins
        mySalad.extras = salad.extras
        mySalad.dressing = salad.dressing
        newCart.push(mySalad)
      })


      {// let mySalad = new Salad();
        // mySalad.foundation = cart[1].foundation
        // mySalad.proteins = cart[1].proteins
        // mySalad.extras = cart[1].extras
        // mySalad.dressing = cart[1].dressing
        // newCart.push(mySalad)
        //console.log(mySalad.getPrice()))
      }

      console.log(newCart)
      console.log("----------ned--------")
      console.log("detta laddades ned-2---")
      //console.log(Object.setPrototypeOf(Salad, cart[0]))
      {
        //const a = Object.setPrototypeOf(Salad, cart[0])
        //console.log(a.getPrice())
        // console.log(newCart)
        // doSomething.prototype.foo = cart[0];
        // const doSomeInstancing = new doSomething();
      }
      console.log("----------ned-2-------")
      this.state.shoppingCart = newCart
      //this.state.shoppingCart = newCart
    }
    //this.state.shoppingCart = JSON.parse(window.localStorage.getItem('Salad'))
    this.addToCart = this.addToCart.bind(this);
    this.removeSalad = this.removeSalad.bind(this);
    //this.componentWillMount = this.componentWillMount.bind(this);
    //this.createSalad = this.createSalad.bind(this);
  }


  componentDidMount() {
    let types = ['foundations', 'proteins', 'extras', 'dressings']
    let result = {};
    types.forEach((type) => {
      this.safeFetchJson(`http://localhost:8080/${type}/`)
        .then(response => response.json())
        .then(data => {
          let requests = data.map(name => this.safeFetchJson(`http://localhost:8080/${type}/${name}`));
          console.log(requests);

          return Promise.all(requests).then(responses => {


            Promise.all(responses.map(r => r.json())).then(details => {

              data.forEach((d, i) => result[d] = details[i]);

            }).then(_ => { this.setState({ inventory: { ...this.state.inventory, ...result } }) })
          })
        })



    })

  }
  //GAMMMMMMALTTTT härifrån
  safeFetchJson(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${url} returned status ${response.status}`);
        }
        return response;
      });
  }
  addToCart(salad) {
    console.log("Retrieved salad: ", salad); // LOGS DATA FROM CHILD (ComposeSalad)
    this.setState((oldState) => {
      const newCart = [...oldState.shoppingCart, salad];
      window.localStorage.setItem('Salad', JSON.stringify(newCart));
      return ({
        shoppingCart: newCart
      });
    });
    console.log("detta lägs upp----")
    console.log([...this.state.shoppingCart, salad])
    console.log("------------------")
  }

  removeSalad(salad) {
    console.log("Removing salad from App.js, with uuid: ", salad.uuid);
    let cart = this.state.shoppingCart;
    cart.splice(cart.indexOf(salad), 1);
    this.setState({ shoppingCart: cart });
    window.localStorage.setItem('Salad', JSON.stringify(cart))
    // this.setState((oldState) => ({
    //   shoppingCart: [...oldState.shoppingCart, cart],
    // }));
  }

  render() {
    console.log(this.state)
    let inventory1 = this.state.inventory
    return (
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <span className="fs-4">Min egen salladsbar</span>
        </header>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="/">hjem</Link>
          <Link to="/compose-salad">komponera en sallad</Link>

          <Link to="/view-order">cart</Link>
        </div>
        <div className="col-12">
          <Routes>
            <Route path="/" element={<h1>Välkommen</h1>} />
            <Route path='/view-ingredient/:extra' element={<ViewIngredient
              //inventory={inventory}
              inventory={this.state.inventory}
            //inventory={inventory1}
            />} />
            <Route path="/compose-salad" element={<ComposeSaladWrapper
              inventory={this.state.inventory}
              addToCart={this.addToCart}
            />} />
            <Route path="/view-order" element={<ViewOrder
              cart={this.state.shoppingCart}
              remove={this.removeSalad}
            ></ViewOrder>} />
          </Routes>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          EDAF90 - webprogrammering
        </footer>
      </div>
    );
  }
}

export default App;
