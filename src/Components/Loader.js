import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  font-family: "Cabin Condensed", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SVG = styled.svg`
  font-weight: bold;
  max-width: 450px;
  height: auto;
`;

const Loader = () => (
  <Container>
    <SVG viewBox="0 0 100 20">
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#FF9900" />
          <stop offset="95%" stopColor="#FFC68D" />
        </linearGradient>
        <pattern
          id="wave"
          x="0"
          y="0"
          width="120"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            id="wavePath"
            d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
            mask="url(#mask)"
            fill="url(#gradient)"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>
      <text
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="17"
        fill="url(#wave)"
        fillOpacity="0.9"
      >
        LOADING...
      </text>
      <text
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="17"
        fill="url(#gradient)"
        fillOpacity="0.3"
      >
        LOADING...
      </text>
    </SVG>
  </Container>
);

export default Loader;
