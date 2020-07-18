import React, {useState, useEffect } from "react";

const PizzaForm = props => {
  
    const defaultState = {
        name: "",
        size: ""
    }

    const [formState, setFormState] = useState(defaultState);


    const handleChange = e => {

        //This checkbox line may not be necessary
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        
        setFormState({
            ...formState, [e.target.name]: value
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
            <label>
                Toppings:
                <ul className="topping-list">
                    <li>
                        <input name="sausage" type="checkbox" onChange={handleChange}/>
                        Sausage
                    </li>
                    <li>
                        <input name="pineapple" type="checkbox" onChange={handleChange}/>
                        Pineapple
                    </li>

                </ul>
                
               
            </label>
            




          </form>

      </div>
  );
};

export default PizzaForm;
