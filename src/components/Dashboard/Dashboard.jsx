import React, { Component } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";

import data from "../../db";
import "./Dashboard.css";

let Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col lg={7} xs={12}>
          <div>
            <Form.Select aria-label="Default select example">
              <option>United Arab Emirates</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={5} xs={12}>
          <div className="dashboard-left mt-5 ">
            <a style={{ color: "#FF4163" }} href="">
              Latest News
            </a>

            {data.map((item) => {
              return (
                <div className="news-card " style={{ display: "flex" }}>
                  <div>
                    <img
                      src={item.urlToImage}
                      alt=""
                      width="180px"
                      height="120px"
                      className="news_item-img"
                    />
                  </div>
                  <div className="news-content">
                    <button>{item.source.name}</button>

                    <h6>{item.title}</h6>
                    <p>{item.author}</p>
                    <a href={item.url}>visit article</a>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>

        <Col md={7} xs={12}>
          <div className="dashboard-right mt-5">
            {data.map((item) => {
              if (item.id === 1) {
                return (
                  <div>
                    <div className="dashboard-right-top">
                      <img
                        src={item.urlToImage}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>
                        by{" "}
                        <span style={{ color: "#ff4163" }}>{item.author}</span>
                        <span style={{ color: "grey" }}> / 2 hours ago</span>
                      </p>
                      <button>visit now</button>
                    </div>
                    <div>
                      <p className="pt-3 pb-3">{item.title}</p>
                      <img
                        src={item.urlToImage}
                        alt=""
                        height="300px"
                        width="100%"
                      />
                      <p className="pt-4 description ">{item.description}</p>
                      <p className="pt-4 content">{item.content}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
