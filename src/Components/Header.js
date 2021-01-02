import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

// CSS
const CssHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#FF9900" : "transparent")};
`;

const CssLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => (
  <CssHeader>
    <List>
      <Item current={pathname === "/"}>
        <CssLink to="/">Home</CssLink>
      </Item>
      <Item current={pathname === "/search"}>
        <CssLink to="/search">Search</CssLink>
      </Item>
      <Item current={pathname === "/company"}>
        <CssLink to="/company">Company</CssLink>
      </Item>
    </List>
  </CssHeader>
);

export default withRouter(Header);
