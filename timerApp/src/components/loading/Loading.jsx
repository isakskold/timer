import React from "react";
import styled from "styled-components";
import logo from "../../assets/loadingLogo.png";

const LoadingStyled = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
`;

const LogoStyled = styled.img`
  height: 35px;
  width: 35px;
`;

const IntervalStyled = styled.h1`
  font-size: 20px;
  color: white;
`;

const SloganStyled = styled.h2`
  font-size: 14px;
  color: white;
`;

const Loading = () => {
  return (
    <LoadingStyled>
      <LogoStyled src={logo} alt="Logo" />
      <IntervalStyled>Interval</IntervalStyled>
      <SloganStyled>For all your timing needs</SloganStyled>
    </LoadingStyled>
  );
};

export default Loading;
