import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: -20px;
  margin-bottom: -50px;
  @keyframes bounce {
    0%,
    20%,
    60%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    40% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }

    80% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    animation: bounce 1s;
    cursor: pointer;
  }
`;

const Text = styled.img`
  margin-left: 10px;
  width: 150px;
  margin-bottom: 5px;
`;

const RXGuideLogo = () => (
  <Div>
    <a
      target="_blank"
      href="https://rxguide.netlify.app/about"
      rel="noreferrer"
      alt="RXGuide website"
    >
      <Logo src="https://i.imgur.com/NEXATrp.png" alt="RXGuide Logo" />
    </a>
    <Text src="https://i.imgur.com/ykY2aQ8.png" alt="RXGuide Logo" />
  </Div>
);

export default RXGuideLogo;
