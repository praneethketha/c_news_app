import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { fetchNews } from "../../api";
import Card from "../Card/Card";
import DetailCard from "../DetailCard/DetailCard";

import { codes } from "./../../db";
import "./Dashboard.css";

let Dashboard = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("ae");
  const [currentItem, setCurrentItem] = useState({});

  // useCallback is used to run the particular callback only when the dependencies update.
  //dependencies are those that mention using array as a prop to useCallback
  // dependencies means the function dependent on those variables.
  const getNews = useCallback(async () => {
    try {
      const res = await fetchNews(country);
      const data = await res.data.articles;
      setCurrentItem(data[0]);
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  }, [country]);

  // calling a function while rendering using useEffect
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <Container fluid className="w-85" style={{ marginTop: "6rem" }}>
      <Row>
        <Col></Col>
        <Col lg={7} xs={12}>
          <div>
            <Form.Select
              aria-label="Default select example"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
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
            <p className="color-brand d-block border-brand">Latest News</p>
            <section className="dashboard_scroll_left">
              {news.map((item) => {
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
