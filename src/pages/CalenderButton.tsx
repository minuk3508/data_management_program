import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface DayProps {
  dayData: string;
  setbutton: Dispatch<SetStateAction<boolean>>;
}
export default function CalenderButton({ dayData, setbutton }: DayProps) {
  const day =
    dayData.slice(0, 4) +
    "년 " +
    dayData.slice(5, 7) +
    "월 " +
    dayData.slice(8, 10) +
    "일 ";
  return (
    <>
      <CalenderButtonWrap>{day}</CalenderButtonWrap>
      <Calender onClick={() => setbutton(true)}>버튼</Calender>
    </>
  );
}

const CalenderButtonWrap = styled.div``;

const Calender = styled.button``;
