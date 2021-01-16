import React, { Component } from "react";
import styled from "styled-components";
import "./Trendings.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const TrendingContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 148px; //different from height because of border, should be the same as height in the end
`;

const Img = styled.div`
  background-image: linear-gradient(180deg, transparent 0% 50%, white 83%),
    url(${(props) => props.bgUrl});
  width: 180px;
  height: 180px;
  border-radius: 10px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.1s linear;
  border: 0.5px solid lightgray;
`;

const Info = styled.div`
  bottom: -30%;
  right: 5%;
  position: absolute;
  opacity: 1;
  transition: opacity 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const InfoColumn = styled.div`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Img} {
      opacity: 0.5;
    }
    ${Info} {
      opacity: 1;
    }
  }
`;

class Trendings extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
    this.content = React.createRef();
    this.previous = React.createRef();
    this.next = React.createRef();
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious() {
    const { carousel, content, previous, next } = this;
    const currentCarousel = carousel.current;
    const currentContent = content.current;
    const currentPrev = previous.current;
    const currentNext = next.current;
    let width = currentCarousel.offsetWidth;

    currentCarousel.scrollBy(-(width - 15), 0);

    if (currentCarousel.scrollLeft - width <= 0) {
      currentPrev.style.display = "none";
    }

    if (
      !currentContent.scrollWidth - width <=
      currentCarousel.scrollLeft + width
    ) {
      currentNext.style.display = "flex";
    }
  }

  handleNext() {
    const { carousel, content, previous, next } = this;
    const currentCarousel = carousel.current;
    const currentContent = content.current;
    const currentPrev = previous.current;
    const currentNext = next.current;
    let width = currentCarousel.offsetWidth;

    currentCarousel.scrollBy(width - 15, 0);

    if (currentCarousel.scrollWidth !== 0) {
      currentPrev.style.display = "flex";
    }

    if (
      currentContent.scrollWidth - width <=
      currentCarousel.scrollLeft + width
    ) {
      currentNext.style.display = "none";
    }
  }

  render() {
    const {
      carousel,
      content,
      previous,
      next,
      handlePrevious,
      handleNext,
    } = this;
    const { trendings } = this.props;
    return (
      <>
        <TrendingContainer>
          <div id="wrapper">
            <div id="carousel" ref={carousel}>
              <div id="content" ref={content}>
                {trendings?.length > 0 &&
                  trendings.map((post, index) => (
                    <Link
                      to={`/posting?id=${post.Contents_id}&type_id=${post.type_id}&category=${post.Category}`}
                      key={index}
                      id="link"
                      style={{ height: 180 }}
                    >
                      {/* <Img src={post.Thumbnail} alt={`${post}-${index}`} /> */}
                      <ImageContainer>
                        <Img bgUrl={post.Thumbnail} />
                        <Info>
                          <InfoColumn>
                            {post.Title.length > 15
                              ? `${post.Title.substring(0, 15).replace(
                                  /\.+$/,
                                  ""
                                )}...`
                              : post.Title}
                          </InfoColumn>
                          <InfoColumn>
                            <AiOutlineHeart color="red" size={20} />
                            {post.Likes > 999
                              ? `${Math.floor(post.Likes * 0.001)}K`
                              : post.Likes}
                          </InfoColumn>
                        </Info>
                      </ImageContainer>
                    </Link>
                  ))}
              </div>
            </div>
            <button id="prev" ref={previous} onClick={handlePrevious}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
              </svg>
            </button>
            <button id="next" ref={next} onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
              </svg>
            </button>
          </div>
        </TrendingContainer>
      </>
    );
  }
}

Trendings.propTypes = {
  trendings: PropTypes.array.isRequired,
};

export default Trendings;
