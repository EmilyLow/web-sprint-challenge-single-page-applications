import React, {useState, useEffect } from "react";
import * as yup from "yup";
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

    //Is there a way to only define this for part of the form? Or do you havea to do it for every object inside the form?
    let formSchema = yup.object().shape({
        name: yup.string().required("Please enter your name.").min(2, "Name must be at least 2 characters in length")

    });

    const inputChange = e => {
        e.persist();

        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
          setErrors({
              ...errors,
              [e.target.name]: ""
          }); 
        })
        
        .catch(err => {
            setErrors({...errors, [e.target.name]: err.errors[0]
            });
        });


    }



    const handleChange = e => {

        //This checkbox line may not be necessary
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        
        setFormState({
            ...formState, [e.target.name]: value
        });

        //Put inputChange(e) to test here
        //console.log(formState);
        if(e.target.name === "name") {
            inputChange(e);
        }
        
    }


    const submitData = e => {
        e.preventDefault();
        console.log("Data submitted");

        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
            setPost(res.data);
            console.log("Success", res.data);
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
                {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
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
                        <input name="sausage" type="checkbox" onChange={handleChange} className = "sausage-topping"/>
                        Sausage
                    </li>
                    <li>
                        <input name="pineapple" type="checkbox" onChange={handleChange} className = "pineapple-topping"/>
                        Pineapple
                    </li>
                    <li>
                        <input name="pepperoni" type="checkbox" onChange={handleChange} className = "pepperoni-topping"/>
                        Pepperoni
                    </li>
                    <li>
                        <input name="olives" type="checkbox" onChange={handleChange} className = "olives-topping"/>
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
