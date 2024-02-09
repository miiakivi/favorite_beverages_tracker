import { Beverage } from "../types/BeverageTypes";

const apiURL = "http://localhost";
const port = 3000;
const baseURL = `${ apiURL }:${ port }`;

export const fetchBeverages = async (): Promise<Beverage[]> => {
  try {
    const response = await fetch( `${ baseURL }/beverages` );
    const beverages: Beverage[] = await response.json();
    return beverages;
  } catch ( error ) {
    console.error( "Error fetching channels:", error );
    throw error;
  }
};