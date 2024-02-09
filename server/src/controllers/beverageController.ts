import { Request, Response } from "express";
import { beverageModule } from "../modules/inMemoryBeverageModule";

export const getAllCoffees = ( req: Request, res: Response ) => {


  console.log( "getting coffees" );
  res.json( beverageModule.getCoffees() );
};

export const getAllTeas = ( req: Request, res: Response ) => {
  res.json( beverageModule.getTeas() );
};