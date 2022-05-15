import React, { useState } from "react";
import { Button, NavLink } from "react-bootstrap";
import { CgMenuGridO } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed-top bg-white">
      <section className="d-flex w-85 py-3 mx-auto justify-content-between align-items-center">
        <h3 className="logo m-0 p-0 color-brand">PSPNEWS</h3>
        <CgMenuGridO
          className="menu color-brand"
          onClick={() => setNavOpen(!navOpen)}
        />
        <nav className={`nav ${navOpen ? "open" : "close"}`}>
          <NavLink
            className="nav_link active"
            onClick={() => setNavOpen(!navOpen)}
          >
            Home
          </NavLink>
          <NavLink className="nav_link" onClick={() => setNavOpen(!navOpen)}>
            Learn
          </NavLink>
          <NavLink className="nav_link" onClick={() => setNavOpen(!navOpen)}>
            About
          </NavLink>
          <Button className="brand_btn_2">
            <MdLogin style={{ marginRight: "5px" }} />
            Login
          </Button>
          <Button className="brand_btn_1">
            <HiUserAdd style={{ marginRight: "5px" }} />
            Sign up
          </Button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
