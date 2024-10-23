import React from "react";
import styled from "styled-components";
import { useTimerStore } from "../../zustand/timerStore";
import { useNavigate } from "react-router-dom";

const AbortButton = styled.button`
  background-color: inherit;
  border: 1px solid #222222;
  border-radius: 5px;
  padding: 0.6rem;
  font-size: 1rem;
  opacity: 60%;
`;

const AbortTimer = () => {
  // Get stopTimer and timerInterval from the store
  const stopTimer = useTimerStore((state) => state.stopTimer);
  const timerInterval = useTimerStore((state) => state.timerInterval);
  const navigate = useNavigate();

  const handleAbortTimer = () => {
    // Check if there's a timer running
    if (timerInterval) {
      stopTimer();
    } else {
      console.log("Timer not on");
    }
    navigate("/SetTimer"); // Navigate to the AnalogTimer route after starting the timer
  };

  return <AbortButton onClick={handleAbortTimer}>Abort Timer</AbortButton>;
};

export default AbortTimer;
