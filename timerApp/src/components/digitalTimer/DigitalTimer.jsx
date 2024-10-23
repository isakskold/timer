import React, { useEffect } from "react";
import AbortTimer from "../utils/AbortTimer";
import { Wrapper } from "../setTimer/setTimer.styles";
import { DigitalTimerStyled } from "./digitalTimer.styles";
import { useTimerStore } from "../../zustand/timerStore";
import { useNavigate } from "react-router-dom";
import NavMenu from "../navMenu/navMenu";

const DigitalTimer = () => {
  const navigate = useNavigate();
  // Access the timer value from the Zustand store
  const timerValue = useTimerStore((state) => state.time); // This will subscribe to state updates

  // Use useEffect to trigger navigation when timerValue reaches 0 or less
  useEffect(() => {
    if (timerValue !== null && timerValue <= 0) {
      navigate("/alarmVy");
    }
  }, [timerValue, navigate]); // Re-run the effect when timerValue changes

  // Convert seconds to minutes:seconds format
  const minutes = Math.floor(timerValue / 60);
  const seconds = timerValue % 60;

  // Format minutes and seconds to always have two digits
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <Wrapper>
      <NavMenu />
      <DigitalTimerStyled>{formattedTime}</DigitalTimerStyled>
      <AbortTimer />
    </Wrapper>
  );
};

export default DigitalTimer;
