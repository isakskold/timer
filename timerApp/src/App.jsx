import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import MotionWrapper from "./components/utils/MotionWrapper";
import SetTimer from "./components/setTimer/SetTimer";
import Loading from "./components/loading/Loading";
import AnalogTimer from "./components/analogTimer/AnalogTimer";
import DigitalTimer from "./components/digitalTimer/DigitalTimer";
import AlarmVy from "./components/alarmvy/AlarmVy";
import "./globalStyles.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation(); // Get current location

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MotionWrapper>
              <Loading />
            </MotionWrapper>
          }
        />
        <Route
          path="/SetTimer"
          element={
            <MotionWrapper>
              <SetTimer />
            </MotionWrapper>
          }
        />
        <Route
          path="/analogTimer"
          element={
            <MotionWrapper>
              <AnalogTimer />
            </MotionWrapper>
          }
        />
        <Route
          path="/digitalTimer"
          element={
            <MotionWrapper>
              <DigitalTimer />
            </MotionWrapper>
          }
        />
        <Route
          path="/alarmvy"
          element={
            <MotionWrapper>
              <AlarmVy />
            </MotionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
