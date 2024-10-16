// src/zustand/timerStore.js
import { create } from "zustand";

export const useTimerStore = create((set) => ({
  time: 0,
  startTimer: () => {
    setInterval(() => {
      set((state) => ({ time: state.time + 1 }));
    }, 1000);
  },
}));
