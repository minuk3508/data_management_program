import { useState } from "react";
import { Template } from "Template/Template";
import styled from "styled-components";
import useFetchWeatherData from "hooks/useFetchWeatherData";
import DegreeGraph from "./DegreeGraph.pages";
import HumidityGraph from "./HumidityGraph.pages";
import PressureGraph from "./PressureGraph.pages";
import CSVExportButton from "./CSVExportButton";
import Calender from "./Calender";
import CalenderButton from "./CalenderButton";
function DashboardPage() {
  const weatherData = useFetchWeatherData();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [button, setbutton] = useState(false);
  const dayData = selectedDay?.toLocaleString("sv") as string;
  if (selectedDay) console.log(dayData);
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
        <TopSectionContainer>
          <CalenderButton dayData={dayData} setbutton={setbutton} />
        </TopSectionContainer>
        <GraphSectionContainer>
          <GraphWrapper>
            <DegreeGraph />
          </GraphWrapper>
          <GraphWrapper>
            <HumidityGraph />
          </GraphWrapper>
          <GraphWrapper>
            <PressureGraph />
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

export default DashboardPage;
