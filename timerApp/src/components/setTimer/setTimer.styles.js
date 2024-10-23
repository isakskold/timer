import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 400px;
  position: relative;
  height: 100vh;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const TimeSlider = styled.section`
  margin-top: 40vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  grid-template-rows: auto; /* Rows will automatically adjust based on content */

  span {
    background-color: inherit;
    border: none;
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    grid-column: span 1; /* Each span takes one column */
  }

  button {
    padding: 0;
    margin: 0;
    font-size: 3rem;
    border: 0;
    background-color: inherit;
    cursor: pointer;
    grid-column: span 1; /* Each button takes one column */
  }

  p {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    grid-column: span 3; /* The paragraph spans all three columns */
    text-align: center; /* Center text within the paragraph */
  }
`;

export const StartTimerBtn = styled.button`
  background-color: inherit;
  border: 1.5px solid black;
  border-radius: 5px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  padding: 0.5rem 0;
`;
