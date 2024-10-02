// src/components/Checkout.js
import React, { useState } from "react";
import ShippingOptions from "./ShippingOptions";

const Checkout = () => {
  const [shippingMethod, setShippingMethod] = useState(""); // State to track selected shipping method

  return (
    <div>
      <h2>Checkout</h2>
      {/* Pass setShippingMethod to ShippingOptions component */}
      <ShippingOptions setShippingMethod={setShippingMethod} />
      {/* Display the selected shipping method */}
      <p>Selected shipping method: {shippingMethod}</p>
    </div>
  );
};

export default Checkout;
