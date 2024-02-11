import React, { useState } from "react";
import "../styles/BeverageForm.css";

import { Beverage, BeverageType } from "../types/BeverageTypes";

type CoffeeFormProps = {
  onSubmit: ( formData: { name: string; weight: number; price: number; roast: number } ) => void;
}

const BeverageForm: React.FC<CoffeeFormProps> = ( { onSubmit } ) => {
  const [ name, setName ] = useState( "" );
  const [ weight, setWeight ] = useState( 100 );
  const [ price, setPrice ] = useState( 1 );
  const [ roast, setRoast ] = useState( 1 );
  const [ type, setType ] = useState<BeverageType>( BeverageType.Coffee );


  const handleSubmit = ( e: React.FormEvent ) => {
    e.preventDefault();
    onSubmit( { name, weight, price, roast } );
  };

  const handleRoastChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const newRoast = parseInt( e.target.value );
    if ( newRoast >= 1 && newRoast <= 5 ) {
      setRoast( newRoast );
    }
  };

  return (
    <form onSubmit = {handleSubmit}>
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
          <label htmlFor = "weight">Weight:</label>
          <input
            type = "number"
            id = "weight"
            value = {weight}
            onChange = {( e ) => setWeight( Number( e.target.value ) )}
            required
          />
        </div>
        <div className = "input-container">
          <label htmlFor = "price">Price €:</label>
          <input
            type = "number"
            id = "price "
            value = {price}
            onChange = {( e ) => setPrice( Number( e.target.value ) )}
            required
          />
        </div>
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
      </div>

      <button type = "submit">Add</button>
    </form>
  );
};

export default BeverageForm;
