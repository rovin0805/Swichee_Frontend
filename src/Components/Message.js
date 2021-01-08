import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BiError } from "react-icons/bi";

const Text = styled.span`
  margin-top: 100px;
  color: ${(props) => props.color};
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = ({ text, color }) => (
  <Text color={color}>
    <BiError color="#D3D3D3" style={{ marginRight: 5 }} size={40} />
    {text}
  </Text>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
