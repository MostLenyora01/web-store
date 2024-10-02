import React, { useState } from "react"; // Import necessary React hooks
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks for state management
import { removeFromCart } from "../redux/actions/cartActions"; // Import action to remove items from cart
import { Button, Container, Table, Form, Modal } from "react-bootstrap"; // Import Bootstrap components for styling

const CartPage = () => {
  // Retrieve the cart state from the Redux store
  const cart = useSelector((state) => state.cart);
  // Get the dispatch function to trigger Redux actions
  const dispatch = useDispatch();

  // State to manage selected shipping method
  const [shippingMethod, setShippingMethod] = useState("");
  // State to manage visibility of the help modal
  const [showHelp, setShowHelp] = useState(false);

  // Function to handle the removal of an item from the cart
  const handleRemove = (id, price, quantity) => {
    dispatch(removeFromCart(id, price, quantity)); // Dispatch remove action with item details
  };

  // Function to handle changes in the selected shipping method
  const handleShippingChange = (event) => {
    setShippingMethod(event.target.value); // Update state when shipping method is selected
  };

  // Functions to show and hide the help modal
  const handleHelpClose = () => setShowHelp(false); // Close the modal
  const handleHelpShow = () => setShowHelp(true); // Open the modal

  return (
    <Container className="mt-5">
      <h2>Your Cart</h2>

      {/* Display a message if the cart is empty */}
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Display the cart items in a table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through each item in the cart and display its details */}
              {cart.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>
                    {/* Button to remove item from the cart */}
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleRemove(item.id, item.price, item.quantity)
                      }
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Display the total cart amount */}
          <h4>Total: ${cart.total.toFixed(2)}</h4>

          {/* Shipping Method Selection */}
          <Form.Group className="mt-4">
            <Form.Label>Select Shipping Method</Form.Label>
            {/* Dropdown to select a shipping method */}
            <Form.Control
              as="select"
              value={shippingMethod}
              onChange={handleShippingChange}
            >
              <option value="">Choose...</option>
              <option value="standard">Standard - 5 to 7 business days</option>
              <option value="express">Express - 2 to 3 business days</option>
              <option value="overnight">Overnight - Next day delivery</option>
            </Form.Control>
          </Form.Group>

          {/* Button to open the help modal */}
          <Button variant="info" className="mt-3" onClick={handleHelpShow}>
            Need Help with Shipping?
          </Button>

          {/* Modal for displaying shipping method help */}
          <Modal show={showHelp} onHide={handleHelpClose}>
            <Modal.Header closeButton>
              <Modal.Title>Shipping Options Help</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <li>
                  <strong>Standard:</strong> Arrives in 5 to 7 business days.
                </li>
                <li>
                  <strong>Express:</strong> Arrives in 2 to 3 business days for
                  urgent deliveries.
                </li>
                <li>
                  <strong>Overnight:</strong> Guaranteed next-day delivery.
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              {/* Button to close the modal */}
              <Button variant="secondary" onClick={handleHelpClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default CartPage;
