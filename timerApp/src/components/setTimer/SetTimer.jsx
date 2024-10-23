import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TimeSlider, StartTimerBtn, Wrapper } from "./setTimer.styles";
import { useTimerStore } from "../../zustand/timerStore";
import NavMenu from "../navMenu/navMenu";

const SetTimer = () => {
  const [counter, setCounter] = useState(0); // useState to manage the counter
  const startTimer = useTimerStore((state) => state.startTimer);
  const navigate = useNavigate();

  const handleStartTimer = () => {
    startTimer(counter); // Start the timer with the value from counter (in minutes)
    navigate("/AnalogTimer"); // Navigate to the AnalogTimer route after starting the timer
  };

  return (
    <Wrapper>
      <NavMenu />

      <TimeSlider>
        {/* Decrease counter */}
        <button onClick={() => setCounter(counter - 1)}>&lt;</button>

        {/* Display current counter value */}
        <span>{counter}</span>

        {/* Increase counter */}
        <button onClick={() => setCounter(counter + 1)}>&gt;</button>
        <p>Minutes</p>
      </TimeSlider>

      <StartTimerBtn onClick={handleStartTimer}>Start Timer</StartTimerBtn>
    </Wrapper>
  );
};

export default SetTimer;
