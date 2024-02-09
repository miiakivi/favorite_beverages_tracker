import React, { useEffect, useState } from "react";

import BeverageForm from "./components/BeverageForm";
import BeverageTable from "./components/BeverageTable";

import { fetchBeverages } from "./api/fetchFunctions";

import { Beverage, BeverageType } from "./types/BeverageTypes";
import "./App.css";

// TODO Post new beverage to server
// TODO Show loading
// TODO Show added beverage immidiatly in the right table
// TODO styles to form
// TODO Form validating


const App: React.FC = () => {

  const [ beverages, setBeverages ] = useState<Beverage[]>( [] );
  const [ coffeeBeverages, setCoffeeBeverages ] = useState<Beverage[]>( [] );

  const [ teaBeverages, setTeaBeverages ] = useState<Beverage[]>( [] );

  // Fetch beverages from server when loaded first time
  useEffect( () => {
    const fetchChannelNamesOnFirstLoad = async () => {
      try {
        const fetchedBeverages = await fetchBeverages();
        separateTypesFromArray( fetchedBeverages );
        setBeverages( fetchedBeverages );
      } catch ( error ) {
        console.error( "error happened when fetching channel names from remote", error );
      }
    };
    fetchChannelNamesOnFirstLoad();
  }, [] );


  const separateTypesFromArray = ( arr: Beverage[] ) => {
    const coffee = arr.filter( item => item.type === BeverageType.Coffee );
    const tea = arr.filter( item => item.type === BeverageType.Tea );
    setCoffeeBeverages( coffee );
    setTeaBeverages( tea );
  };

  const submitingNewBeverage = () => {
    console.log( "new beverage" );
  };

  return (
    <div className = "App">
      <header>
        <h1>My Favorite Beverages ☕️</h1>
      </header>
      <div className = "content">
        <div className = "content-container">
          <div className = "form-container">
            <h2>Add beverage</h2>
            <BeverageForm onSubmit = {submitingNewBeverage}></BeverageForm>
          </div>
          <div className = "flex-container">
            <div className = "flex-child-large">
              <BeverageTable beverages = {coffeeBeverages} beverageType = {BeverageType.Coffee}/>
            </div>
            <div className = "flex-child">
              <BeverageTable beverages = {teaBeverages} beverageType = {BeverageType.Tea}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
