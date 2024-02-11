import React, { useState } from "react";
import "../styles/BeverageForm.css";

import { Beverage, BeverageType } from "../types/BeverageTypes";

type CoffeeFormProps = {
  onSubmit: ( formData: Beverage ) => void;
}

const BeverageForm: React.FC<CoffeeFormProps> = ( { onSubmit } ) => {
  const [ name, setName ] = useState( "" );
  const [ weight, setWeight ] = useState( 100 );
  const [ price, setPrice ] = useState( 1 );
  const [ roast, setRoast ] = useState( 1 );
  const [ type, setType ] = useState<BeverageType>( BeverageType.Coffee );


  const handleSubmit = ( e: React.FormEvent ) => {
    e.preventDefault();
    onSubmit( { name, weight, price, roast, type } );
    setToDefaultValues();
  };

  const setToDefaultValues = () => {
    // Set values to default
    setName( "" );
    setWeight( 0 );
    setPrice( 0 );
    setRoast( 0 );
    setType( BeverageType.Coffee );
  };

  const handleBeverageTypeChange = () => {
    const newType = type === BeverageType.Coffee ? BeverageType.Tea: BeverageType.Coffee;
    setType( newType );
  };

  const handleRoastChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const newRoast = parseInt( e.target.value );
    if ( newRoast >= 1 && newRoast <= 5 ) {
      setRoast( newRoast );
    }
  };

  // TODO Fix repetition
  const handleWeightChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const newWeight = parseInt( e.target.value );
    if ( newWeight > 0 ) {
      setWeight( newWeight );
    }
  };

  const handlePriceChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const newPrice = parseFloat( e.target.value );
    if ( newPrice > 0 ) {
      setPrice( newPrice );
    }
  };

  // TODO Roast select option, not input number
  return (
    <form onSubmit = {handleSubmit}>
      <div className = "toggle-switch">
        <p className = "toggle-switch__label">Pick a beverage:</p>
        <div className = "toggle-switch-container">
          <div
            className = {`toggle-option ${ type === BeverageType.Coffee ? "selected" : "" }`}
            onClick = {handleBeverageTypeChange}>
            Coffee
          </div>
          <div
            className = {`toggle-option ${ type === BeverageType.Tea ? "selected" : "" }`}
            onClick = {handleBeverageTypeChange}>
            Tea
          </div>
        </div>
      </div>

      <div className = "input-container">
        <label htmlFor = "name">Name:</label>
        <input
          type = "text"
          id = "name"
          value = {name}
          onChange = {( e ) => setName( e.target.value )}
          required
        />
      </div>
      <div className = "input-container-flex">
        <div className = "input-container">
          <label htmlFor = "weight">Weight (g):</label>
          <input
            type = "number"
            id = "weight"
            value = {weight}
            onChange = {handleWeightChange}
            required
          />
        </div>
        <div className = "input-container">
          <label htmlFor = "price">Price €:</label>
          <input
            type = "number"
            id = "price "
            value = {price}
            onChange = {handlePriceChange}
            required
          />
        </div>
        {type === BeverageType.Coffee ? (
          <div className = "input-container">
            <label htmlFor = "roast">Roast:</label>
            <input
              type = "number"
              id = "roast"
              value = {roast}
              onChange = {handleRoastChange}
              min = {1}
              max = {5}
            />
          </div>
        ) : <></>}
      </div>
      <button type = "submit">Add</button>
    </form>
  );
};

export default BeverageForm;
