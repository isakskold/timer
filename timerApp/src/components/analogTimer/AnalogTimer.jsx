import React, { useEffect } from "react";
import AbortTimer from "../utils/AbortTimer";
import { Wrapper } from "../setTimer/setTimer.styles";
import { AnalogTimerStyled } from "./analogTimer.styles";
import AnalogTimerClock from "./AnalogTimerClock";
import { useNavigate } from "react-router-dom";
import { useTimerStore } from "../../zustand/timerStore";
import NavMenu from "../navMenu/navMenu";

const AnalogTimer = () => {
  const navigate = useNavigate();
  const timerValue = useTimerStore((state) => state.time); // This will subscribe to state updates

  // Use useEffect to trigger navigation when timerValue reaches 0 or less
  useEffect(() => {
    if (timerValue !== null && timerValue <= 0) {
      console.log("Timer reached zero");

      navigate("/alarmVy");
    }
  }, [timerValue, navigate]); // Re-run the effect when timerValue changes
  return (
    <Wrapper>
      <NavMenu />
      <AnalogTimerStyled>
        <AnalogTimerClock />
      </AnalogTimerStyled>
      <AbortTimer />
    </Wrapper>
  );
};

export default AnalogTimer;
