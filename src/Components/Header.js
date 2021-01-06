import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "Assets/swichee.png";
import { AiOutlineHome } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import { FaRegBuilding } from "react-icons/fa";

const CssHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px;
  background-color: white;
`;

const List = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 800px;
`;

const Coulmn = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  width: 80px;
  height: 60px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#FF9900" : "transparent")};
  transition: border-bottom 0.2s ease-in-out;
`;

const CssLink = styled(Link)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => (
  <CssHeader>
    <List>
      <Coulmn>
        <img src={logo} alt="logo" height="25px" />
      </Coulmn>
      <Coulmn>
        <Item current={pathname === "/"}>
          <CssLink to="/">
            <AiOutlineHome size={23} />
          </CssLink>
        </Item>
        <Item current={pathname === "/search"}>
          <CssLink to="/search">
            <CgSearch size={23} />
          </CssLink>
        </Item>
        <Item current={pathname === "/company"}>
          <CssLink to="/company">
            <FaRegBuilding size={23} />
          </CssLink>
        </Item>
      </Coulmn>
    </List>
  </CssHeader>
);

export default withRouter(Header);
