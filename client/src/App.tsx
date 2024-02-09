import React from "react";
import "./App.css";
import BeverageForm from "./components/BeverageForm";
import BeverageTable from "./components/BeverageTable";

import { BeverageType } from "./types/BeverageTypes";

function App () {

  const submitingNewBeverage = () => {
    console.log( "new beverage" );
  };

  return (
    <div className = "App">
      <div className = "wrapper">
        <header>
          <h1>My Favorite Beverages ☕️</h1>
        </header>
        <div className = "content-container">
          <div className = "form-container">
            <h2>Add beverage</h2>
            <BeverageForm onSubmit = {submitingNewBeverage}></BeverageForm>
          </div>

          <BeverageTable beverageType = {BeverageType.Coffee}/>
          <BeverageTable beverageType = {BeverageType.Tea}/>
        </div>
      </div>

    </div>
  );
}

export default App;
