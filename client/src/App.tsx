import React, { useEffect, useState } from "react";

import BeverageForm from "./components/BeverageForm";
import BeverageTable from "./components/BeverageTable";

import { fetchBeverages, postNewBeverage } from "./api/fetchFunctions";

import { Beverage, BeverageType } from "./types/BeverageTypes";
import "./App.css";

// TODO Show loading

const App: React.FC = () => {
  const [ coffeeBeverages, setCoffeeBeverages ] = useState<Beverage[]>( [] );
  const [ teaBeverages, setTeaBeverages ] = useState<Beverage[]>( [] );
  const [ loading, setLoading ] = useState( true );

  // Fetch beverages from server when loaded first time
  useEffect( () => {
    const fetchChannelNamesOnFirstLoad = async () => {
      try {
        const fetchedBeverages = await fetchBeverages();
        separateTypesFromArray( fetchedBeverages );
        setLoading( false );
      } catch ( error ) {
        console.error( "Error when fetching channel names from DB", error );
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

  const submitingNewBeverage = ( newBeverage: Beverage ) => {
    // Posts new beverage to database
    postNewBeverage( newBeverage );
    addNewBeverageToLocal( newBeverage );
  };


  // Adds beverage to view
  const addNewBeverageToLocal = ( newBeverage: Beverage ) => {
    switch ( newBeverage.type ) {
      case BeverageType.Coffee:
        setCoffeeBeverages( ( prevCoffes ) => {
          return [ newBeverage, ...prevCoffes ];
        } );
        return;
      case BeverageType.Tea:
        setTeaBeverages( ( prevTeas ) => {
          return [ newBeverage, ...prevTeas ];
        } );
        return;
    }
  };

  return (
    <div className = "App">
      <header>
        <h1>My Favorite Beverages ☕️</h1>
      </header>
      <div className = "content">
        <div className = "content-container">
          <div className = "form-container">
            <BeverageForm onSubmit = {submitingNewBeverage}></BeverageForm>
          </div>
          {!loading ? (
            <div className = "flex-container">
              <div className = "flex-child-large">
                <BeverageTable beverages = {coffeeBeverages} beverageType = {BeverageType.Coffee}/>
              </div>
              <div className = "flex-child">
                <BeverageTable beverages = {teaBeverages} beverageType = {BeverageType.Tea}/>
              </div>
            </div>
          ) : <p>Loading...</p>}

        </div>
      </div>
    </div>
  );
};

export default App;
