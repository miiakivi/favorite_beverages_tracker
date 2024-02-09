import type { Beverage } from "../types/Beverage";

const coffees: Beverage[] = [
  {
    name: "Espresso",
    weight: 250,
    price: 2.99,
    roast: 5
  },
  {
    name: "Kulta Katriina",
    weight: 500,
    price: 6.99,
    roast: 1
  },
];
const teas: Beverage[] = [
  {
    name: "Green Tea",
    weight: 250,
    price: 4.99,
  },
  {
    name: "Orange Rooibos",
    weight: 200,
    price: 2.99,
  },

];

export const beverageModule = {
  getCoffees () {
    console.log( "coffee place", coffees );
    return coffees;
  },

  getTeas () {
    return teas;
  },

  addTeaToDB ( newTea: Beverage ) {
    teas.push( newTea );
  },

  addCoffeeToDB ( newCoffee: Beverage ) {
    coffees.push( newCoffee );
  }
};