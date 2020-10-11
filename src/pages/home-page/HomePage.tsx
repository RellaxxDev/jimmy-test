import React from "react";
import Manufactures from "../../containers/manufactures";
import styled from "styled-components";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h1`
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #FFF842;
`;

const HomePage: React.FC = () => (
  <StyledHomePage>
    <StyledHeader>Jimmy test</StyledHeader>
    <Manufactures />
  </StyledHomePage>
);

export default HomePage;
