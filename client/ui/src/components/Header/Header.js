import React from "react";
import PropTypes from "prop-types";

import { header } from "@/constants";

import "./Header.scss";

const Header = ({ date= header.todayDate }) => (
  <nav>
    <i aria-label="Menu" className="bars big icon" />
    <h1>{header.title}</h1>
    <p>{date}</p>
  </nav>
);

Header.propTypes = {
  date: PropTypes.string,
};

export default Header;
