import { Request, Response } from "express";
import { beverageModule } from "../modules/inMemoryBeverageModule";
import { Beverage } from "../types/BeverageTypes";

export const getAllBeverages = ( req: Request, res: Response ) => {
  res.json( beverageModule.getAllBeverages() );
};

export const postNewBeverage = ( req: Request, res: Response ) => {
  try {
    // Extract parameters
    const { type, name, weight, price } = req.body as Beverage;

    // Validate
    if ( !type || !name || !weight || !price ) {
      return res.status( 400 ).json( { error: "Missing required parameters" } );
    }
    // Success
    beverageModule.addNewBeverage( req.body );
    res.status( 201 ).json( { message: "Beverage created successfully" } );

  } catch ( error ) {
    console.error( "Error adding beverage to db:", error );
    res.status( 500 ).json( { error: "Internal server error" } );
  }
};