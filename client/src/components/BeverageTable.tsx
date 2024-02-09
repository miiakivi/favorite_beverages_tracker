import React from "react";
import "../styles/BeverageTable.css";

import { BeverageType } from "../types/BeverageTypes";

type TableProps = {
  beverageType: BeverageType;
}

const BeverageTable: React.FC<TableProps> =  ( { beverageType } ) => {

  return (
    <div className = "table-container">
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
          <tr>
            <td>Coffee 1</td>
            <td>250g</td>
            <td>$12.99</td>
            {beverageType === BeverageType.Coffee && <td>3</td>}
          </tr>
          <tr>
            <td>Coffee 2</td>
            <td>500g</td>
            <td>$19.99</td>
            {beverageType === BeverageType.Coffee && <td>3</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BeverageTable;
