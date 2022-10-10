import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Template } from "Template/Template";
import styled from "styled-components";
import useFetchWeatherData, { dataProps } from "hooks/useFetchWeatherData";
import DegreeGraph from "./DegreeGraph.pages";
import HumidityGraph from "./HumidityGraph.pages";
import PressureGraph from "./PressureGraph.pages";
import CSVExportButton from "./CSVExportButton";
import Calender from "./Calender";
import CalenderButton from "./CalenderButton";
import moment from "moment";

export interface dateProps {
  date: string;
  weatherData: dataProps | undefined;
}
function DashboardPage() {
  const weatherData = useFetchWeatherData();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [button, setbutton] = useState(false);
  const dayData = selectedDay?.toLocaleString("sv") as string;
  const formattedDayData = moment(dayData).format("DD");
  const navigate = useNavigate();

  const defaultDate = useMemo(() => {
    return moment(
      weatherData?.feeds.slice(-1)[0].created_at.slice(0, -1)
    ).format("DD");
  }, [weatherData]);

  const availableDates = useMemo(() => {
    const result = weatherData?.feeds.map((feed) =>
      moment(feed.created_at.slice(0, -1)).format("DD")
    );
    return [...new Set(result)];
  }, [weatherData]);

  const date = useMemo(() => {
    return availableDates.includes(formattedDayData)
      ? formattedDayData
      : defaultDate;
  }, [availableDates, formattedDayData, defaultDate]);

  const goToDataList = () => {
    navigate("/");
  };
  return (
    <Template>
      {button && (
        <Calender
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setbutton={setbutton}
        />
      )}
      <Container>
        <GoDashboardBtn onClick={goToDataList}>
          <BtnText>DataList</BtnText>
        </GoDashboardBtn>
        <TopSectionContainer>
          <CalenderButton dayData={dayData} setbutton={setbutton} date={date} />
          <DateAlert>
            현재 조회 가능한 일수는 <strong>{availableDates.join(",")}</strong>{" "}
            일 입니다.
          </DateAlert>
        </TopSectionContainer>
        <GraphSectionContainer>
          <GraphWrapper>
            <DegreeGraph date={date} weatherData={weatherData} />
          </GraphWrapper>
          <GraphWrapper>
            <HumidityGraph date={date} weatherData={weatherData} />
          </GraphWrapper>
          <GraphWrapper>
            <PressureGraph date={date} weatherData={weatherData} />
          </GraphWrapper>
        </GraphSectionContainer>
        <BottomSectionContainer>
          <CSVExportButton />
        </BottomSectionContainer>
      </Container>
    </Template>
  );
}
const Container = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    height: auto;
  }
  width: 100%;
  height: 100%;
`;
const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.tabletL} {
    height: 5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
`;

const GraphSectionContainer = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    flex-direction: column;
    height: auto;
    padding-top: 5%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;
const GraphWrapper = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    width: 80%;
    height: 60%;
    margin: 3% 0%;
  }
  width: 28%;
  height: 24%;
  min-width: 21rem;
  min-height: 18rem;
  margin: 0% 3%;
  padding: 20px;
`;
const BottomSectionContainer = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    height: 5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
`;
const DateAlert = styled.div`
  strong {
    color: red;
  }
`;
const GoDashboardBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 20px 0 0 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px grey;

  :hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.tabletL} {
    margin-left: 15px;
  }
`;

const BtnText = styled.span`
  text-align: center;
  padding: 5px 0;
`;
export default DashboardPage;
