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
            <th>Price €</th>
            {beverageType === BeverageType.Coffee && <th>Roast</th>}
          </tr>
        </thead>
        <tbody>
          {beverages.map( ( beverage ) => {
            return (
              <>
                <tr>
                  <td>{beverage.name}</td>
                  <td>{beverage.weight}g</td>
                  <td>{beverage.price}€</td>
                  {beverageType === BeverageType.Coffee && <td>{beverage.roast}</td>}
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
