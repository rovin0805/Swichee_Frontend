import React, { Component } from "react";
import styled from "styled-components";
import { trendingImages } from "../testData";
import "./Trendings.css";
import PropTypes from "prop-types";
import { FaHotjar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrendingContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 148px; //different from height because of border, should be the same as height in the end
`;

const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 180px;
  height: 180px;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
`;

const InfoBox = styled.div`
  background-color: white;
  position: absolute;
  width: 180px;
  height: 80px;
  bottom: 0;
  display: flex;
  align-items: flex-end;
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
                      <Img src={post.Thumbnail} alt={`${post}-${index}`} />
                      {/* <InfoBox>dddddddddddddd</InfoBox> */}
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
