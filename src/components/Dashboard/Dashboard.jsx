import React, { useState } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { convertDate } from "../../utils/recentTime";

import { data, codes } from "./../../db";
import "./Dashboard.css";

let Dashboard = () => {
  const [currentItem, setCurrentItem] = useState(data[0]);
  return (
    <Container fluid className="w-85" style={{ marginTop: "6rem" }}>
      <Row>
        <Col></Col>
        <Col lg={7} xs={12}>
          <div>
            <Form.Select aria-label="Default select example">
              {codes.map((item) => {
                return (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5} xs={12}>
          <div className="dashboard-left mt-5">
            <a style={{ color: "#FF4163" }} href="#">
              Latest News
            </a>

            {data.map((item) => {
              return (
                <div
                  className="news-card "
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={() => setCurrentItem(item)}
                >
                  <div>
                    <img
                      src={item.urlToImage}
                      alt=""
                      className="news_item-img"
                    />
                  </div>
                  <div className="news-content">
                    <button>{item.source.name}</button>

                    <h6>{item.title}</h6>
                    <p>{item.author}</p>
                    <a rel="noreferrer" href={item.url} target="_blank">
                      visit article
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>

        <Col lg={7} xs={12} className="mobile_none">
          <div className="dashboard-right mt-5">
            <div>
              <div className="dashboard-right-top">
                <img
                  src={currentItem.urlToImage}
                  alt=""
                  width="50px"
                  height="50px"
                />
                <p>
                  by{" "}
                  <span style={{ color: "#ff4163" }}>{currentItem.author}</span>
                  <span style={{ color: "grey" }}>
                    {" "}
                    / {convertDate(currentItem.publishedAt)} ago
                  </span>
                </p>
                <a rel="noreferrer" href={currentItem.url} target="_blank">
                  visit now
                </a>
              </div>
              <div>
                <h5 className="pt-3 pb-3">{currentItem.title}</h5>
                <img
                  src={currentItem.urlToImage}
                  alt=""
                  className="detail_img"
                />
                <p className="pt-4 description">{currentItem.description}</p>
                <p className="pt-4 content">{currentItem.content}</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
