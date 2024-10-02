// src/components/StorePage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const StorePage = () => {
  const dispatch = useDispatch();

  // Example product data (You can fetch this data from an API)
  const products = [
    {
      id: 1,
      name: "Puma",
      price: 2700,
      description: "Future Rider",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/374141/02/sv01/fnd/IND/fmt/png",
    },
    {
      id: 2,
      name: "NIKE DUNK",
      description: "Optical illusion elements",
      price: 3200,
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F07%2Febay-nike-dunk-low-preview-early-look-01-copy.jpg?cbr=1&q=90",
    },
    {
      id: 3,
      name: "NIKE DUNK",
      description: "Is a Texture-Lover's Dream",
      price: 2670,
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F07%2Fcactus-plant-flea-market-nike-dunk-low-official-look-release-info-dm0430-700-001.jpg?cbr=1&q=90",
    },
    {
      id: 4,
      name: "NIKE",
      description: "Pink Air-force J",
      price: 2800,
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F07%2Fnike-dunk-high-pink-oxford-phantom-dd1869-003-price-release-info-1-copy.jpg?cbr=1&q=90",
    },
    {
      id: 5,
      name: "NIKE",
      description: "Vibram Shock",
      price: 1800,
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F07%2Fsacai-nike-cortez-4-0-dq0581-100-white-university-red-price-release-info-1.jpg?cbr=1&q=90",
    },
    {
      id: 6,
      name: "NIKE SB",
      description: "SB Dunk High Sweet-Tooth",
      price: 2524,
      image:
        "https://selectshopframe.com/cdn/shop/files/CandyCorn-1.jpg?v=1699087680",
      colors: ["Red", "Green", "Blue"],
    },
    {
      id: 7,
      name: "NIKE",
      description: "Red DUNK Low Shoes",
      price: 2124,
      image:
        "https://carvanmart.com/cdn/shop/files/618y70FKQ1L._US800_1080x.jpg?v=1720952858",
    },
    {
      id: 8,
      name: "NIKE",
      description: "Midnight DUNK Low Shoes",
      price: 2200,
      image:
        "https://carvanmart.com/cdn/shop/files/61jMaeIXtBL._US800_1080x.jpg?v=1720958419",
    },
    {
      id: 9,
      name: "Sabrina 2 By You",
      description: "Custom Basketball Shoes",
      price: 2923.7,
      image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/h_300,c_limit/279a502a-51ae-4fc6-ab72-ae014d350e2e/sabrina-2-by-you-custom-basketball-shoes-XZ4NVM.png",
    },
    {
      id: 10,
      name: "NIKE",
      description: "Orange Dunk Swate Low Shoes",
      price: 3200,
      image:
        "https://selectshopframe.com/cdn/shop/files/NKDV5429-800-MUL1.png?v=1695837444",
    },
  ];

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch action to add product to cart
  };

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              {/* Display the product image */}
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }} // Adjust image styling as needed
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>

                <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>

                <Button
                  variant="warning"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StorePage;
