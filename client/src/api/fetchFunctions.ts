import { Beverage } from "../types/BeverageTypes";

const apiURL = "http://localhost";
const port = 4000;
const baseURL = `${ apiURL }:${ port }`;

// Get request. Fetches beverages from remote DB
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

// TODO is there better way than fetch to make post requests
// Post request. Posts new beverage to DB
export const postNewBeverage = async ( newBeverage: Beverage ): Promise<void> => {
  try {
    const response = await fetch( `${ baseURL }/beverages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( newBeverage )
    } );

    if ( !response.ok ) {
      throw new Error( `HTTP error! Status: ${ response.status }` );
    }

    const responseBody = await response.json();
    console.log( "Response:", responseBody );
  } catch ( error ) {
    console.error( "Error when posting message:", error );
    throw error;
  }
};