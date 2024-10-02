import React from "react"; // Import React to create the functional component
import { Navbar, Nav, Container } from "react-bootstrap"; // Import Bootstrap components for responsive navigation
import { Link } from "react-router-dom"; // Import Link to handle navigation without refreshing the page

// The Header component receives 'user' and 'setUser' as props
const Header = ({ user, setUser }) => {
  // Function to handle logout
  const handleLogout = () => {
    // Remove the user information from localStorage
    localStorage.removeItem("loggedInUser");
    // Clear the logged-in user from the state
    setUser("");
  };

  return (
    // Bootstrap Navbar component for the website header
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand name/logo as a link to the homepage */}
        <Navbar.Brand as={Link} to="/">
          Lenyora Premium Kicks.
        </Navbar.Brand>

        {/* Toggle button for expanding/collapsing the navigation on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar collapse to group the navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Navigation links to different pages */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>

            {/* If the user is logged in, show welcome message and logout option */}
            {user ? (
              <>
                {/* Display the username */}
                <Navbar.Text>Welcome, {user}!</Navbar.Text>
                {/* Logout link */}
                <Nav.Link as={Link} to="/" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              // If no user is logged in, show login and register options
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
