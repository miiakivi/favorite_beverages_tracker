import React from "react";
import "../styles/BeverageTable.css";

import { Beverage, BeverageType } from "../types/BeverageTypes";

type TableProps = {
  beverages: Beverage[];
  beverageType: BeverageType;
}

const BeverageTable: React.FC<TableProps> =  ( { beverageType, beverages } ) => {

  return (
    <div className = "table-container">
      <h3>{beverageType === BeverageType.Coffee ? "Coffees" : "Teas"}</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            {beverageType === BeverageType.Coffee && <th>Roast</th>}
            <th>€</th>
          </tr>
        </thead>
        <tbody>
          {beverages.map( ( beverage, index ) => {
            return (
              <>
                <tr key = {index}>
                  <td>{beverage.name}</td>
                  <td>{beverage.weight}g</td>
                  {beverageType === BeverageType.Coffee && <td>{beverage.roast}</td>}
                  <td>{beverage.price}€</td>
                </tr>
              </>
            );
          } )}
        </tbody>
      </table>
    </div>
  );
};

export default BeverageTable;
