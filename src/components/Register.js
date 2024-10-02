// src/components/Register.js
import React, { useState } from "react"; // Import React and useState hook
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap"; // Import Bootstrap components

// Register component
const Register = () => {
  // useState hook to manage form data, error, and success messages
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // Error state for validation messages
  const [success, setSuccess] = useState(""); // Success state for successful registration

  // handleChange function to update form data dynamically as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update specific field in the form data
  };

  // handleSubmit function to process the form data when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    const { firstName, surname, username, email, password, confirmPassword } =
      formData;

    // Basic form validation for empty fields
    if (
      !firstName ||
      !surname ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }

    // Regular expression pattern to validate email format
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Password confirmation check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save user data to localStorage (this can be replaced by an API call in real projects)
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    setError(""); // Clear any error message
    setSuccess("Registration successful! Please log in."); // Show success message
  };

  return (
    <Container className="mt-5">
      <Row>
        {/* Center the form on medium-sized screens */}
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Register</h2>

          {/* Display error or success messages if they exist */}
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          {/* Registration form */}
          <Form onSubmit={handleSubmit}>
            {/* First name input field */}
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange} // Update formData state on input change
              />
            </Form.Group>

            {/* Surname input field */}
            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Username input field */}
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Email input field */}
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Password input field */}
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Confirm password input field */}
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Submit button */}
            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
