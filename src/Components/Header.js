import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "Assets/swichee.png";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { FaRegBuilding } from "react-icons/fa";
import logo2 from "Assets/logo.png";

const CssHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
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
  margin-left: 10px;
`;

const Item = styled.li`
  padding : 2px 10px 10px 10px;
  margin-top: 0px;
  width: 60px;
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
        <CssLink to="/">
          <img src={logo} alt="logo" height="25px" />
        </CssLink>
      </Coulmn>
      <Coulmn>
        <Item current={pathname === "/"}>
          <CssLink to="/">
            <AiOutlineHome size={20} />
          </CssLink>
        </Item>
        <Item current={pathname === "/search"}>
          <CssLink to="/search">
            <CgSearch size={20} />
          </CssLink>
        </Item>
        <Item current={pathname === "/user"}>
          <CssLink to="/user">
            <AiOutlineUser size={20} />
          </CssLink>
        </Item>
        <Item current={pathname === "/company"}>
          <CssLink to="/company">
            <FiZap size={20} />
          </CssLink>
        </Item>
      </Coulmn>
    </List>
  </CssHeader>
);

export default withRouter(Header);
