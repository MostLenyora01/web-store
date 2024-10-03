// src/components/Login.js

import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import * as Yup from "yup"; // Import Yup for form validation
import { Formik } from "formik"; // Import Formik for form handling

// Define validation schema using Yup for form validation
const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters") // Username should be at least 4 characters long
    .required("Username is required"), // Username is required
  password: Yup.string()
    .min(8, "Password must be at least 8 characters") // Password should be at least 8 characters long
    .required("Password is required"), // Password is required
});

const Login = ({ setUser }) => {
  const [error, setError] = useState(""); // State to track login errors

  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  // Function to handle login form submission
  const handleLogin = (values, { setSubmitting, resetForm }) => {
    const { username, password } = values; // Destructure username and password from form values

    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if no user is registered
    if (!storedUser) {
      setError("No user found. Please register first."); // Set error if no user found
      setSubmitting(false); // Stop form submission
      return;
    }

    // Check if the entered username and password match the stored user credentials
    if (storedUser.username === username && storedUser.password === password) {
      setError(""); // Clear any previous errors
      setUser(username); // Update the logged-in user state
      localStorage.setItem("loggedInUser", username); // Store the logged-in user in localStorage

      resetForm(); // Reset form inputs after successful login

      navigate("/landing"); // Redirect to the landing page after login
    } else {
      setError("Invalid username or password."); // Set error if credentials are incorrect
    }

    setSubmitting(false); // Stop form submission
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Login</h2>
          {/* Display error message if there is one */}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* Formik component for handling form submission and validation */}
          <Formik
            initialValues={{ username: "", password: "" }} // Set initial form values
            validationSchema={validationSchema} // Apply validation schema
            onSubmit={handleLogin} // Set form submission handler
          >
            {({
              values, // Form values
              errors, // Validation errors
              touched, // Tracks if the field has been touched
              handleChange, // Handler for input change
              handleBlur, // Handler for input blur (when user clicks away)
              handleSubmit, // Handler for form submission
              isSubmitting, // Indicates if the form is in the process of being submitted
            }) => (
              <Form onSubmit={handleSubmit}>
                {/* Username input field */}
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={values.username} // Formik-controlled input value
                    onChange={handleChange} // Update the form values on change
                    onBlur={handleBlur} // Mark field as touched when the user blurs the input
                    isInvalid={touched.username && errors.username} // Show error if the field is touched and has an error
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username} {/* Display validation error */}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password input field */}
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={values.password} // Formik-controlled input value
                    onChange={handleChange} // Update the form values on change
                    onBlur={handleBlur} // Mark field as touched when the user blurs the input
                    isInvalid={touched.password && errors.password} // Show error if the field is touched and has an error
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password} {/* Display validation error */}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Submit button */}
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  disabled={isSubmitting} // Disable the button while form is being submitted
                >
                  {isSubmitting ? "Logging in..." : "Login"}{" "}
                  {/* Display loading state or login */}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
