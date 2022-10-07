import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styled from "styled-components";

export default function Calender() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);

  // const date = selectedDay.toLocaleString("sv") as string;

  let date: string = "";
  if (selectedDay) date = selectedDay.toLocaleString("sv") as string;
  console.log(date);

  return (
    <CalenderWrap>
      <DayPickerWrap>
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
const DayPickerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
  height: 50%;
  background-color: #ffff;
  border-radius: 5px;
  &&& {
    .rdp {
      --rdp-cell-size: 42px;
      --rdp-accent-color: #0000ff;
      --rdp-background-color: #e7edff;
      --rdp-accent-color-dark: #3003e1;
      --rdp-background-color-dark: #180270;
      --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
      --rdp-outline-selected: 3px solid var(--rdp-accent-color); /* Outline border for focused _and_ selected elements */

      margin: 1em;
    }
  }
`;
