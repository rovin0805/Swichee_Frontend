import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const Container = styled.div``;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { photoArr } = this.props;
    return (
      <Container>
        <StyledSlider {...settings}>
          {photoArr?.length &&
            photoArr.map((item, index) => {
              return (
                <div key={`photo-${index}`}>
                  <Img src={item} />
                </div>
              );
            })}
        </StyledSlider>
      </Container>
    );
  }
}
