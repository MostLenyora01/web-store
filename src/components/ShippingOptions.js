// src/components/ShippingOptions.js
import React, { useState } from "react"; // Import React and useState hook

// ShippingOptions component receives a prop 'setShippingMethod' to set the selected shipping method in the parent component
const ShippingOptions = ({ setShippingMethod }) => {
  // useState hook to manage the selected shipping option, default is 'standard'
  const [selectedOption, setSelectedOption] = useState("standard");

  // handleChange function updates the selected option and passes it to the parent component via setShippingMethod
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update local selected option state
    setShippingMethod(event.target.value); // Pass the selected option to the parent component
  };

  return (
    <div>
      <h4>Select Shipping Method</h4>
      <form>
        {/* Standard shipping option */}
        <div>
          <input
            type="radio"
            id="standard"
            name="shipping"
            value="standard"
            checked={selectedOption === "standard"} // Checked if 'standard' is selected
            onChange={handleChange} // Call handleChange when the option is selected
          />
          <label htmlFor="standard">Standard (3-5 days) - $5.00</label>
        </div>

        {/* Express shipping option */}
        <div>
          <input
            type="radio"
            id="express"
            name="shipping"
            value="express"
            checked={selectedOption === "express"} // Checked if 'express' is selected
            onChange={handleChange} // Call handleChange when the option is selected
          />
          <label htmlFor="express">Express (1-2 days) - $15.00</label>
        </div>

        {/* Overnight shipping option */}
        <div>
          <input
            type="radio"
            id="overnight"
            name="shipping"
            value="overnight"
            checked={selectedOption === "overnight"} // Checked if 'overnight' is selected
            onChange={handleChange} // Call handleChange when the option is selected
          />
          <label htmlFor="overnight">Overnight - $25.00</label>
        </div>
      </form>
    </div>
  );
};

export default ShippingOptions;
