import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import RegImage from "../../assests/Register.png";
import "./Register.css";
const Register = () => {
  return (
    <>
      <Container>
        <h1 className="shadow-sm  mt-5 p-3 text-center rounded regheading">
          Register
        </h1>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto  rounded-lg">
            <img src={RegImage} width="500px" height="400px" />
          </Col>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg Registerform"
          >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" name="phone" placeholder="Phone" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter address"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="buttoncolor" variant="btn-block" type="submit">
                Register
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default Register;
