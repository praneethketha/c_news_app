import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";
import Loginimage from "../../assests/Login.png";
const Login = () => {
  return (
    <>
      <Container>
        <h1 className="shadow-sm  mt-5 p-3 text-center rounded Loginheading">
          Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg "
          >
            <img
              className="Loginimage"
              src={Loginimage}
              width="500px"
              height="500px"
            />
          </Col>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg   Loginform"
          >
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </Form.Group>
              {["checkbox"].map((type) => (
                <div key={type} className="mb-3">
                  <Form.Check type={type} id={`check-api-${type}`}>
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label className="checkbox">
                      Remember Password
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))}
              <Button
                className="buttoncolor"
                variant=" btn-block"
                type="submit"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
