//import React from "react";
//import imported from "../inventory.ES6";

class Salad {
  static instanceCounter = 0;
  // constructor(Inventory) {

  constructor() {
    //this.Inventory = Inventory;
    this.foundation = [];
    this.proteins = [];
    this.extras = [];
    this.dressing = [];
    this.uuid = "salad_" + Salad.instanceCounter++;
  }

  add(name, properties) {
    if ("foundation" in properties) {
      this.foundation.push({ name: name, properties: properties });
      console.log("Added foundation: %s", name);
      return this;
    } else if ("protein" in properties) {
      this.proteins.push({ name: name, properties: properties });
      console.log("Added protein: %s", name);
      return this;
    } else if ("extra" in properties) {
      this.extras.push({ name: name, properties: properties });
      console.log("Added extra: %s", name);
      return this;
    } else if ("dressing" in properties) {
      this.dressing.push({ name: name, properties: properties });
      console.log("Added dressing: %s", name);
      return this;
    }
  }

  remove(name) {
    // let properties = imported.inventory[name];
    let properties = this.Inventory
    if ("foundation" in properties) {
      this.foundation.splice(this.foundation.indexOf(name), 1);
      console.log("Removed foundation: ", name);
      return this;
    } else if ("protein" in properties) {
      this.proteins.splice(this.proteins.indexOf(name), 1);
      console.log("Removed protein: ", name);
      return this;
    } else if ("extra" in properties) {
      this.extras.splice(this.extras.indexOf(name), 1);
      console.log("Removed extra: ", name);
      return this;
    } else if ("dressing" in properties) {
      this.dressing.splice(this.dressing.indexOf(name), 1);
      console.log("Removed dressing: ", name);
      return this;
    }
  }

  getPrice() {
    let total = 0;
    let components = [
      this.foundation,
      this.proteins,
      this.extras,
      this.dressing,
    ];
    components.forEach((c) => c.map((ing) => (total += ing.properties.price)));
    //this.foundation.map((ing) => (total += ing.properties.price));
    return total;
  }

  count(property) {
    let count = 0;
    let components = [
      this.foundation,
      this.proteins,
      this.extras,
      this.dressing,
    ];
    components.forEach((c) => {
      c.filter((ing) => ing.properties.hasOwnProperty(property)).map(
        (_) => (count += 1)
      );
    });
    return count;
  }

  test() {
    console.log("test");
  }

  viewSalad() {
    console.log("======== YOUR SALAD ========");
    console.log("Foundation: ", this.foundation);
    console.log("Proteins: ", this.proteins);
    console.log("Extras: ", this.extras);
    console.log("Dressing: ", this.dressing);
  }
}

export default Salad;
