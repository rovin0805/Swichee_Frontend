import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const categories = [
  "Funding",
  "Music",
  "Sports",
  "Gaming",
  "Codemy",
  "Entertainment",
  "News & Politics",
  "Education",
  "Pets & Animal",
  "Travel & Events",
  "Science & Tech",
  "People & Blogs",
  "Fashion & Style",
  "Autos & Vehicles",
  "Film & Animation",
  "Food & Recipe",
  "Webtoon",
  "Daily",
  "Illustration",
];

const SidebarContainer = styled.div`
  width: 250px;
  max-height: calc(90vh - 50px);
  position: sticky;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  width: 100%;
  height: 480px; // TODO: make dynamic for number of categories
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  margin-top: 20px;
  padding: 25px 20px;
  background-color: white;
`;

const Title = styled.ul`
  font-size: 15px;
  font-weight: bold;
  color: #ff9900;
  margin-bottom: 20px;
`;

const Item = styled.li`
  margin: 10px 0;
  font-size: 13px;
  color: #525252;
  cursor: pointer;
  &:hover {
    color: #ff9900;
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  color: #cccc;
  font-size: 15px;
  cursor: pointer;
`;

const TopBtn = styled.div`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 20px;
  background-color: #ff9900;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 15px;
`;

const Sidebar = () => (
  <SidebarContainer>
    <Category>
      <Title>
        Post Category
        {categories.map((category) => (
          <Item key={categories.indexOf(category)}>{category}</Item>
        ))}
      </Title>
    </Category>
    <Footer>
      <Link to="/company">About Swichee © 2021</Link>
    </Footer>
    <TopBtn onClick={() => Scroll.animateScroll.scrollToTop()}>
      <AiOutlineArrowUp size={21} />
    </TopBtn>
  </SidebarContainer>
);

export default Sidebar;
