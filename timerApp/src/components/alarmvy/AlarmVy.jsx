import React from "react";
import { AnimatedImg, CustomWrapper } from "./alarmVy.styles";
import { SetNewTimerBtnStyled, AlertStyled } from "./alarmVy.styles";
import { useNavigate } from "react-router-dom";
import alarmIcon from "../../assets/alarmIcon.png";

const AlarmVy = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/SetTimer");
  };
  return (
    <CustomWrapper>
      <AlertStyled>
        <AnimatedImg src={alarmIcon} alt="Bell" />
        <h1>Times up!</h1>
      </AlertStyled>
      <SetNewTimerBtnStyled onClick={handleClick}>
        Set New Timer
      </SetNewTimerBtnStyled>
    </CustomWrapper>
  );
};

export default AlarmVy;
