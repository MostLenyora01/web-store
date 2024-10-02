// src/components/LandingPage.js
import React from "react"; // Import React to define the component
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Bootstrap components for layout and styling
import { Link } from "react-router-dom"; // Import Link for navigation between pages

const LandingPage = () => {
  return (
    // Bootstrap Container for page layout with centered text and margin at the top
    <Container className="text-center mt-5">
      <Row className="align-items-center">
        {/* Left Column: Welcome message and description */}
        <Col lg={6} md={12}>
          {/* Main heading */}
          <h1>Welcome to:</h1>
          {/* Store name */}
          <span>
            <h1>LENYORA PREMIUM KICKS STORE</h1>
          </span>
          {/* Short description */}
          <span>
            <marquee>
              <p>Discover amazing premium sneakers and step with pride.</p>
            </marquee>
          </span>
          {/* Button that navigates to the store page */}
          <Button as={Link} to="/store" variant="primary">
            Shop Now
          </Button>
        </Col>

        {/* Right Column: Image showcasing the store */}
        <Col lg={6} md={12}>
          {/* Display store image */}
          <span>
            <img
              src="Lenyora Premium Kicks.png"
              alt="Store" // Alt text for the image
              className="img-fluid" // Bootstrap class to make the image responsive
            />
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
