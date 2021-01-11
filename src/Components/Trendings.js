import React, { Component } from "react";
import styled from "styled-components";
import { trendingImages } from "../testData";
import "./Trendings.css";
import PropTypes from "prop-types";
import { FaHotjar } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Title = styled.div`
  color: #ff9900;
  margin-top: 40px;
  font-weight: bold;
  font-size: 17px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px){
    align-items: center;
    
    margin-left: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    
    margin-left: 10px;
  }
  @media only screen and (min-width: 1025px) {
    align-items: center;
    
    padding-right : 100px;
    padding-left : 100px;
  }
`;
const TrendingContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 148px; //different from height because of border, should be the same as height in the end
  @media only screen and (max-width: 767px){
    align-items: center;
    padding-right : 50px;
    padding-left : 30px;
    margin-left: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    overflow:hidden;
    padding-right : 50px;
    padding-left : 30px;
    margin-left: auto; 
    margin-right: auto;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    align-items: center;
    overflow:hidden;
    padding-right : 100px;
    padding-left : 100px;
    margin-left: auto; 
    margin-right: auto;
  }
  @media only screen and (min-width: 1201px) {
    width :1200px;
    align-items: center;
    overflow:hidden;
    padding-right : 100px;
    padding-left : 100px;
    margin-left: auto; 
    margin-right: auto;
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
    return (
      <>
        <Title>
          <FaHotjar style={{ marginRight: 5 }} color="#ff9900" size={20} />
          Todays Trending
        </Title>
        <TrendingContainer>
          <div id="wrapper">
            <div id="carousel" ref={carousel}>
              <div id="content" ref={content}>
                {/* {this.props.thumbnails.map(({ Thumbnail }, index) => ( */}
                {trendingImages.map((Thumbnail, index) => (
                  <img
                    key={`${Thumbnail}-${index}`}
                    src={Thumbnail}
                    alt={`${Thumbnail}-${index}`}
                    className="item"
                  />
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
  thumbnails: PropTypes.array,
};

export default Trendings;
