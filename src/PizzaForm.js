import React, {useState, useEffect } from "react";

import axios from "axios";

//Question, should I be needing to command line each thing I want to install individually?

const PizzaForm = props => {
  
    const defaultState = {
        name: "",
        size: "",
        instructions: ""
    }

    const [formState, setFormState] = useState(defaultState);
    const [post, setPost] = useState([]);
    const [errors, setErrors] = useState({...defaultState, terms: ""});


    const handleChange = e => {

        //This checkbox line may not be necessary
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        
        setFormState({
            ...formState, [e.target.name]: value
        });

        //Put inputChange(e) to test here
        //console.log(formState);
    }


    const submitData = e => {
        e.preventDefault();
        console.log("Data submitted");

        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
            setPost(res.data);
            console.log("Success", res);
        })
        .catch(err => console.log(err.response));

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
                    <li>
                        <input name="pepperoni" type="checkbox" onChange={handleChange}/>
                        Pepperoni
                    </li>
                    <li>
                        <input name="olives" type="checkbox" onChange={handleChange}/>
                        Olives
                    </li>

                </ul>
                
            </label>
            <label>
                Special Instructions:
                <input
                type="text"
                name="instructions"
                value={formState.instructions}
                onChange = {handleChange}
                />
            </label>


            <button>Add To Order</button>

          </form>

      </div>
  );
};

export default PizzaForm;
