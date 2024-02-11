import { Beverage, BeverageType } from "../types/BeverageTypes";

// Local database with mock data
const beverages: Beverage[] = [
  {
    type: BeverageType.Coffee,
    name: "Juhla Mokka",
    weight: 250,
    price: 2.99,
    roast: 5
  },
  {
    type: BeverageType.Coffee,
    name: "Kulta Katriina",
    weight: 500,
    price: 6.99,
    roast: 1
  },
  {
    type: BeverageType.Tea,
    name: "Green Tea",
    weight: 250,
    price: 4.99,
  },
  {
    type: BeverageType.Tea,
    name: "Orange Rooibos",
    weight: 200,
    price: 2.99,
  },
];

export const beverageModule = {
  getAllBeverages () {
    return beverages;
  },

  addNewBeverage ( beverage: Beverage ) {
    beverages.push( beverage );
  }
};