import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/loadingLogo.png";
import {
  LoadingStyled,
  LogoStyled,
  IntervalStyled,
  SloganStyled,
} from "./loading.styles";

const Loading = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/SetTimer");
  };
  return (
    <LoadingStyled onClick={handleClick}>
      <LogoStyled src={logo} alt="Logo" />
      <IntervalStyled>Interval</IntervalStyled>
      <SloganStyled>For all your timing needs</SloganStyled>
    </LoadingStyled>
  );
};

export default Loading;
