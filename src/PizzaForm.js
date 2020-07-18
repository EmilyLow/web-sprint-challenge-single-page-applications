import React, {useState, useEffect } from "react";

const PizzaForm = props => {
  
    const defaultState = {
        name: ""
    }

    const [formState, setFormState] = useState(defaultState);


    const handleChange = e => {

        setFormState({
            ...formState, [e.target.name]: e.target.value
        });

        //Put inputChange(e) to test here
    }


    const submitData = e => {

    }
  
    return (
      
      <div className="form">
          <form onSubmit={submitData}>
            <label>
                Name:
                <input
                type = "text"
                name = "name"
                value = {formState.name}
                onChange = {handleChange}
                className = "name-field"
                />
            </label>
            <label>
                Pizza Size:
                <select id="size" name="size" onChange={handleChange}>    
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

            </label>
            




          </form>

      </div>
  );
};

export default PizzaForm;
