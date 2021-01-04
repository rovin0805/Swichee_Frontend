import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Trending = ({
  id,
  imageUrl,
  contentsType,
  likes,
  title,
  writer,
  blue,
  view,
}) => (
  <Link to={`/posting/${id}`}>
    <Trending></Trending>
  </Link>
);

Trending.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  contentsType: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  blue: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
};

export default Trending;
