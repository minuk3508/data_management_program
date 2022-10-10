import { Dispatch, SetStateAction } from "react";
import { FcCalendar } from "react-icons/fc";
import theme from "../styles/theme";
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
      <CalenderButtonWrap onClick={() => setbutton(true)}>
        {day}
        <Calender>
          <FcCalendar size="2x" />
        </Calender>
      </CalenderButtonWrap>
    </>
  );
}

const CalenderButtonWrap = styled.div`
  @media ${theme.device.tabletL} {
    color: ${({ theme }) => theme.colors.black};
    background-color: #ffff;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
`;

const Calender = styled.div`
  width: 3rem;
  height: 5rem;
`;
