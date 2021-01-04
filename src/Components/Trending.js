import React, { Component } from "react";
import styled from "styled-components";
import { trendingImages } from "../testData";
import "../Routes/Home/test.css";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const TrendingContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 148px; //different from height because of border, should be the same as height in the end
`;

class Trending extends Component {
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
      <TrendingContainer>
        <div id="wrapper">
          <div id="carousel" ref={carousel}>
            <div id="content" ref={content}>
              {this.props.thumbnails.map(({ Thumbnail }, index) => (
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
    );
  }
}

export default Trending;
