import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const categories = [
  "No Choice",
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
  text-align: left;
  margin-top : 20px;
  margin-left : 70px;
  @media only screen and (max-width: 768px) {
    display : none;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width:200px;
    height: auto;
  }
`;

const Category = styled.div`
  width: 100%;
  height: 580px; // TODO: make dynamic for number of categories
  border-radius: 35px;
  // box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  margin-top: 20px;
  margin-right: 100px;
  padding: 25px 20px;
  background-color: white;
`;

const Title = styled.ul`
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
  color: #ff9900;
  margin-bottom: 30px;
`;

const Item = styled.li`
  margin: 13px 0;
  margin-left: 10px;
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
  margin-right: 88px;
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
  margin-right: 88px;
`;

const Sidebar = ({ updateContainer }) => (
  <SidebarContainer>
    <Category>
      <Title>
        Post Categories
        {categories.map((category) => (
          <Link
            to={`/category/${category.replace(/\s/g, "")}`}
            key={categories.indexOf(category)}
            onClick={() => updateContainer && updateContainer()}
          >
            <Item>{category}</Item>
          </Link>
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
