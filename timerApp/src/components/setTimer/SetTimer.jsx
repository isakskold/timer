import React from "react";
import styled from "styled-components";
import { CheckBox, TimeSlider, StartTimerBtn } from "./setTimer.styles";

const Wrapper = styled.div``;

const SetTimer = () => {
  return (
    <Wrapper>
      <TimeSlider />
      <CheckBox />
      <CheckBox />
      <StartTimerBtn />
    </Wrapper>
  );
};

export default SetTimer;
