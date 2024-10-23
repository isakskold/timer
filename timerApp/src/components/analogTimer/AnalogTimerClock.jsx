import React from "react";
import {
  MinutesCircleStyled,
  BigPointerStyled,
  SmallPointerStyled,
  BlackCircleStyled,
  GrayCircleStyled,
} from "./analogTimer.styles";
import { useTimerStore } from "../../zustand/timerStore";
import minutesCircle from "./clock/minutes.png";
import hourHandle from "./clock/hourHandle.png";
import minuteHandle from "./clock/minuteHandle.png";
import blackCircle from "./clock/blackCircle.png";
import grayCircle from "./clock/grayCircle.png";

const AnalogTimerClock = () => {
  const timerValue = useTimerStore((state) => state.time);
  const initialTime = useTimerStore((state) => state.initialTime);
  const rotation = useTimerStore((state) => state.rotation);
  console.log("Timer value:", timerValue);
  console.log("Initial time:", initialTime);
  console.log("Rotation:", rotation);

  return (
    <>
      {/* The minutes circle */}
      <MinutesCircleStyled src={minutesCircle} alt="Minutes circle" />

      {/* Hour handle (big pointer) */}
      <BigPointerStyled
        src={hourHandle}
        alt="Hour handle"
        animate={{ rotate: rotation }} // Animate the rotation
        transition={{ duration: 0.1, ease: "easeOut" }}
      />

      <BlackCircleStyled src={blackCircle} alt="Black circle" />
      <GrayCircleStyled src={grayCircle} alt="Gray circle" />

      {/* Minute handle (small pointer) */}
      <SmallPointerStyled src={minuteHandle} alt="Minute handle" />
    </>
  );
};

export default AnalogTimerClock;
