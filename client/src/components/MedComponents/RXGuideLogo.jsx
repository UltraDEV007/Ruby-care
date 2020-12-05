import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: -20px;
  margin-bottom: -50px;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Text = styled.img`
  margin-left: 10px;
  width: 150px;
  margin-bottom: 5px;
`;

const RXGuideLogo = () => (
  <Div>
    <Logo src="https://i.imgur.com/NEXATrp.png" alt="RXGuide Logo" />
    <Text src="https://i.imgur.com/ykY2aQ8.png" alt="RXGuide Logo" />
  </Div>
);

export default RXGuideLogo;
