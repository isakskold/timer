import { create } from "zustand";

export const useTimerStore = create((set) => ({
  time: null,
  initialTime: null,
  timerInterval: null,
  rotation: 0, // Initialize rotation to 0

  // Function to start the countdown with a given initial time in seconds
  startTimer: (initialTime) => {
    // First, clear any active timer if there is one
    set((state) => {
      if (state.timerInterval) {
        clearInterval(state.timerInterval); // Clear the old timer
        console.log("Previous timer cleared");
      }

      // Calculate degrees to rotate per second
      const degreesPerSecond = 360 / (initialTime * 60); // Total degrees divided by total seconds

      // Set the initial state immediately
      return {
        time: initialTime * 60, // Convert minutes to seconds
        initialTime: initialTime * 60,
        timerInterval: null, // Reset timerInterval before starting a new one
        rotation: 0, // Reset rotation when starting a new timer
        degreesPerSecond, // Store degrees per second in the state
      };
    });

    // Update time state every second to simulate a timer
    const intervalId = setInterval(() => {
      set((state) => {
        if (state.time > 0) {
          const newTime = state.time - 1; // Decrement time by 1 second

          // Calculate the new rotation
          const newRotation = state.rotation + state.degreesPerSecond; // Increment rotation

          return {
            time: newTime,
            rotation: newRotation, // Update rotation state
          };
        } else {
          // Stop the timer when it reaches zero
          clearInterval(state.timerInterval);
          console.log("Time is up");

          return {
            timerInterval: null,
            time: null,
            initialTime: null,
            rotation: 360, // Set rotation to 360 degrees when time is up
          };
        }
      });
    }, 1000);

    set({ timerInterval: intervalId }); // Store the interval ID
  },

  // Function to stop the timer manually
  stopTimer: () => {
    set((state) => {
      if (state.timerInterval) {
        clearInterval(state.timerInterval);
        console.log("Timer aborted");

        return {
          timerInterval: null,
          time: null,
          initialTime: null,
          rotation: 0, // Reset rotation when stopped
        };
      }
      return state; // Return current state if there's no interval
    });
  },
}));
