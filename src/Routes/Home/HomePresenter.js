import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Posting from "Components/Posting";
import Posting2 from "Components/Posting2";
import Trending from "Components/Trending";
import { AiOutlineArrowUp } from "react-icons/ai";
import * as Scroll from "react-scroll";

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

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;

const PostContainer = styled.div`
  width: 100%;
`;

const SidebarContainer = styled.div`
  width: 250px;
  max-height: calc(90vh - 50px);
  position: sticky;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Order = styled.div`
  width: 100%;
  height: 560px; // TODO: make dynamic for number of categories
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 8px -2px;
  margin-top: 20px;
  padding: 25px 20px;
  background-color: white;
`;

const OrderTitle = styled.ul`
  font-size: 15px;
  font-weight: bold;
  color: #ff9900;
  margin-bottom: 20px;
`;

const OrderItem = styled.li`
  margin: 10px 0;
  font-size: 12px;
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

const TrendingContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid black;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 148px; //different from height because of border, should be the same as height in the end
`;

const CarouselImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 1px solid black;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
`;

const HomePresenter = ({ thumbnails, loading, error }) => (
  <>
    {loading ? (
      <p>loading..</p>
    ) : (
      <Container>
        <TrendingContainer>
          {thumbnails &&
            thumbnails.map((s, i) => (
              <CarouselImg className="cImg">
                <img alt="blah" style={{ width: "100%" }} src={s.Thumbnail} />
              </CarouselImg>
            ))}
        </TrendingContainer>
        <MainContent>
          <PostContainer>
            {thumbnails &&
              thumbnails.map((thumbnail) => (
                <Posting2
                  key={thumbnail.Contents_id}
                  id={thumbnail.Contents_id}
                  imageUrl={thumbnail.Thumbnail}
                  contentsType={thumbnail.type_id}
                  title={thumbnail.Title}
                  writer={thumbnail.User_name}
                  blue={thumbnail.blue}
                  likes={thumbnail.Likes}
                  view={thumbnail.Views}
                />
              ))}
          </PostContainer>
          <SidebarContainer>
            <Order>
              <OrderTitle>
                Order
                <OrderItem>최신순</OrderItem>
                <OrderItem>인기순</OrderItem>
              </OrderTitle>
              <OrderTitle>
                Category
                {categories.map((category) => (
                  <OrderItem key={categories.indexOf(category)}>
                    {category}
                  </OrderItem>
                ))}
              </OrderTitle>
            </Order>
            <Footer>
              <Link to="/company">About Swichee © 2021</Link>
            </Footer>
            <TopBtn onClick={() => Scroll.animateScroll.scrollToTop()}>
              <AiOutlineArrowUp size={20} />
            </TopBtn>
          </SidebarContainer>
        </MainContent>
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  thumbnails: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
