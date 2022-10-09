import React, { Dispatch, SetStateAction } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styled from "styled-components";
import theme from "../styles/theme";
interface DayProps {
  selectedDay: Date | undefined;
  setSelectedDay: Dispatch<SetStateAction<Date | undefined>>;
  setbutton: Dispatch<SetStateAction<boolean>>;
}

export default function Calender({
  selectedDay,
  setSelectedDay,
  setbutton,
}: DayProps) {
  return (
    <CalenderWrap>
      <DayPickerWrap>
        <ExitButton onClick={() => setbutton(false)}>X</ExitButton>
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
        />
      </DayPickerWrap>
    </CalenderWrap>
  );
}
const CalenderWrap = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const DayPickerWrap = styled.div`
  @media ${theme.device.tabletL} {
    height: 60%;
  }
  display: flex;
  position: relative;
  justify-content: center;
  width: 25%;
  min-width: 320px;
  height: 55%;
  background-color: #ffff;
  border-radius: 5px;
  &&& {
    .rdp {
      --rdp-cell-size: 42px;
      --rdp-accent-color: #4f4f4f;
      --rdp-background-color: #b5b5b5;
      --rdp-accent-color-dark: #3003e1;
      --rdp-background-color-dark: #180270;
      --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
      --rdp-outline-selected: 3px solid var(--rdp-accent-color); /* Outline border for focused _and_ selected elements */

      margin: 1em;
    }
  }
`;

const ExitButton = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #ffff;
  border: none;
  cursor: pointer;
`;
