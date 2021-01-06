import React from "react";
import styled from "styled-components";
import { VscLoading } from "react-icons/vsc";

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin-top: 20px;
  color: #525252;
`;

const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      Loading...
      <VscLoading style={{ marginLeft: 5 }} />
    </span>
  </Container>
);

export default Loader;
