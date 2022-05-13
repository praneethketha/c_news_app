import React, { useState } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { convertDate } from "../../utils/recentTime";
import Card from "../Card/Card";
import DetailCard from "../DetailCard/DetailCard";

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
            <a className="color-brand d-block pb-2" href="#">
              Latest News
            </a>
            <section className="dashboard_scroll_left">
              {data.map((item) => {
                return <Card item={item} setCurrentItem={setCurrentItem} />;
              })}
            </section>
          </div>
        </Col>

        <Col lg={7} xs={12} className="mobile_none">
          <div className="dashboard-right mt-5">
            <DetailCard currentItem={currentItem} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
