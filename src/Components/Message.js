import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BiError } from "react-icons/bi";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>
      <BiError color="#D3D3D3" style={{ marginRight: 5 }} size={40} />
      {text}
    </Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
